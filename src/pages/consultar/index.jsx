/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Container } from '../../styles/globalStyles';
import ViewInfos from './InfoDeptos';
// import SwitchScreen from '../../components/switchScreen/index';
import { ConsultarContainer } from './styled';
import axios from '../../services/axios'; // Importe o axios aqui
import Loading from '../../components/loading/index'; // Importe o Loading aqui

// Componente auxiliar para destacar o texto (copiado de filtrar.jsx)
function HighlightedText({ text, highlight }) {
   if (!highlight.trim()) {
      return <span>{text}</span>;
   }
   const regex = new RegExp(`(${highlight})`, 'gi');
   const parts = text.split(regex);

   return (
      <span>
         {parts.map((part, index) =>
            // eslint-disable-next-line react/no-array-index-key
            regex.test(part) ? <strong key={index}>{part}</strong> : part,
         )}
      </span>
   );
}

export default function Home() {
   const [isLoading, setIsLoading] = useState(false);
   const [allDeptos, setAllDeptos] = useState([]); // Guarda todos os departamentos originais
   const [filteredDeptos, setFilteredDeptos] = useState([]); // Departamentos que correspondem ao filtro
   const [activeIndex, setActiveIndex] = useState(-1); // Índice do item destacado com o teclado
   const [valorInput, setValorInput] = useState('');
   const [isSelected, setIsSelected] = useState(false); // Flag para controlar se algo foi selecionado

   const [selectedDept, setSelectedDept] = useState(null);

   // pegando os departamentos do banco
   useEffect(() => {
      async function getData() {
         try {
            setIsLoading(true);
            const { data } = await axios.get('/departamentos'); // pegando os departamentos do banco

            if (data && Array.isArray(data)) {
               setAllDeptos(data);
            } else {
               toast.info('Nenhum departamento encontrado');
            }
         } catch (err) {
            const status = get(err, 'response.status', 0);
            const errors = get(err, 'response.data.errors', []);

            if (status === 400) errors.map((error) => toast.error(error));
            // history.push('/');
         } finally {
            setIsLoading(false);
         }
      }
      getData();
   }, []); // <- Array de dependências vazio para rodar apenas uma vez

   // Filtra a lista sempre que o termo de busca (searchTerm) mudar
   useEffect(() => {
      // Se já foi selecionado, não filtra
      if (isSelected) return;

      if (valorInput.trim() === '') {
         setFilteredDeptos([]);
         return;
      }

      const filtered = allDeptos.filter((dept) =>
         dept.titulo.toLowerCase().includes(valorInput.toLowerCase()),
      );

      setFilteredDeptos(filtered);
      setActiveIndex(-1);
   }, [valorInput, allDeptos, isSelected]);

   // Handler para o clique no item da lista (lógica de Filtrar)
   const handleItemClick = (dept) => {
      setSelectedDept(dept);
      setValorInput(dept.titulo); // Preenche o input
      setFilteredDeptos([]); // Esconde a lista IMEDIATAMENTE
      setActiveIndex(-1); // Reset active index
      setIsSelected(true); // Marca como selecionado para bloquear o filtro
      toast.success(`Selecionado: ${dept.titulo}`);
   };

   // Handler para navegação com teclado (movido de Filtrar)
   const handleKeyDown = (e) => {
      if (filteredDeptos.length === 0) return;

      if (e.key === 'ArrowDown') {
         e.preventDefault();
         setActiveIndex((prev) => (prev + 1) % filteredDeptos.length);
      } else if (e.key === 'ArrowUp') {
         e.preventDefault();
         setActiveIndex(
            (prev) =>
               (prev - 1 + filteredDeptos.length) % filteredDeptos.length,
         );
      } else if (e.key === 'Enter' && activeIndex > -1) {
         e.preventDefault();
         handleItemClick(filteredDeptos[activeIndex]);
      } else if (e.key === 'Escape') {
         e.preventDefault();
         setFilteredDeptos([]); // Clear list on Escape
         setActiveIndex(-1);
      }
   };

   return (
      <Container>
         <Loading isLoading={isLoading} />
         <ConsultarContainer>
            <h1>Consultar</h1>
            <input
               type="text"
               autoComplete="off"
               // eslint-disable-next-line jsx-a11y/no-autofocus
               autoFocus="true"
               placeholder="Digite o nome do departamento"
               value={valorInput}
               onChange={(e) => {
                  setValorInput(e.target.value);
                  setIsSelected(false); // Reseta a flag quando o usuário começa a digitar
               }}
               onKeyDown={handleKeyDown} // Adicionado o evento de teclado aqui
            />
            <button type="button">Consultar</button>

            {/* INÍCIO DA CORREÇÃO */}
            {filteredDeptos.length > 0 && (
               <ul>
                  {filteredDeptos.map((dept, index) => (
                     // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                     <li
                        key={dept.id}
                        className={index === activeIndex ? 'highlighted' : ''}
                        onClick={() => handleItemClick(dept)}
                        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                        // onMouseOver={() => setActiveIndex(index)}
                     >
                        <HighlightedText
                           text={dept.titulo}
                           highlight={valorInput}
                        />
                     </li>
                  ))}
               </ul>
            )}
            {/* FIM DA CORREÇÃO */}
            <ViewInfos selectedDept={selectedDept} />
         </ConsultarContainer>
      </Container>
   );
}
