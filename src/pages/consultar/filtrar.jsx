// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// import React from 'react';
// import PropTypes from 'prop-types'; // Adicione esta importação
// import { FilterListContainer } from './styled';

// // Componente auxiliar para destacar o texto
// function HighlightedText({ text, highlight }) {
//    if (!highlight.trim()) {
//       return <span>{text}</span>;
//    }
//    const regex = new RegExp(`(${highlight})`, 'gi');
//    const parts = text.split(regex);

//    return (
//       <span>
//          {parts.map((part, index) =>
//             // eslint-disable-next-line react/no-array-index-key
//             regex.test(part) ? <strong key={index}>{part}</strong> : part,
//          )}
//       </span>
//    );
// }

// // O componente agora é uma função pura que recebe props
// export default function Filtrar({
//    items,
//    searchTerm,
//    activeIndex,
//    onItemClick,
//    setActiveIndex,
// }) {
//    // Se não houver itens ou o campo de busca estiver vazio, não renderiza nada
//    if (items.length === 0 || !searchTerm) {
//       return null;
//    }

//    return (
//       <FilterListContainer>
//          <ul>
//             {items.map((item, index) => (
//                <li
//                   key={item.id}
//                   className={index === activeIndex ? 'highlighted' : ''}
//                   onClick={() => onItemClick(item)}
//                   // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
//                   onMouseOver={() => setActiveIndex(index)}
//                >
//                   <HighlightedText text={item.titulo} highlight={searchTerm} />
//                </li>
//             ))}
//          </ul>
//       </FilterListContainer>
//    );
// }

// // Adicione a validação das props
// Filtrar.propTypes = {
//    items: PropTypes.arrayOf(
//       PropTypes.shape({
//          id: PropTypes.number.isRequired,
//          titulo: PropTypes.string.isRequired,
//       }),
//    ).isRequired,
//    searchTerm: PropTypes.string.isRequired,
//    activeIndex: PropTypes.number.isRequired,
//    onItemClick: PropTypes.func.isRequired,
//    setActiveIndex: PropTypes.func.isRequired,
// };
// HighlightedText.propTypes = {
//    text: PropTypes.string.isRequired,
//    highlight: PropTypes.string.isRequired,
// };
