// ===== CORES PRINCIPAIS LEGADAS (mantidas para compatibilidade) =====
export const primaryColor = '#6366f1'; // Indigo vibrante
export const primaryDarkColor = '#0a0a0f'; // Quase preto com toque de azul
export const secondaryDarkColor = '#13131a'; // Cinza escuro azulado

export const successColor = '#10b981'; // Verde esmeralda
export const ifErrorColor = '#10b981';
export const errorColor = '#ef4444'; // Vermelho vibrante
export const warningColor = '#f59e0b'; // Âmbar

// ===== BACKGROUNDS & SURFACES (Tema Escuro) =====
export const background = '#0a0a0f'; // Preto profundo com leve toque azulado
export const surface1 = '#13131a'; // Cinza muito escuro azulado
export const surface2 = '#1a1a24'; // Cinza escuro com toque roxo
export const surface3 = '#21212e'; // Cinza médio escuro

// ===== CORES PRIMÁRIAS & ACENTOS =====
// Paleta Indigo/Purple moderna e minimalista
export const primary = '#6366f1'; // Indigo vibrante - cor principal
export const primaryHover = '#4f46e5'; // Indigo mais escuro
export const primaryLight = 'rgba(99, 102, 241, 0.12)'; // Indigo transparente

// Alternativa: Paleta Cyan/Blue (descomente para usar)
// export const primary = '#06b6d4'; // Cyan moderno
// export const primaryHover = '#0891b2'; // Cyan escuro
// export const primaryLight = 'rgba(6, 182, 212, 0.12)';

// Alternativa: Paleta Purple/Violet (descomente para usar)
// export const primary = '#8b5cf6'; // Roxo vibrante
// export const primaryHover = '#7c3aed'; // Roxo escuro
// export const primaryLight = 'rgba(139, 92, 246, 0.12)';

// Alternativa: Paleta Green/Emerald (descomente para usar)
// export const primary = '#10b981'; // Verde esmeralda
// export const primaryHover = '#059669'; // Verde escuro
// export const primaryLight = 'rgba(16, 185, 129, 0.12)';

// ===== CORES SEMÂNTICAS =====
export const danger = '#ef4444'; // Vermelho
export const dangerHover = '#dc2626'; // Vermelho escuro
export const dangerLight = 'rgba(239, 68, 68, 0.12)';

export const success = '#10b981'; // Verde esmeralda
export const successHover = '#059669'; // Verde escuro
export const successLight = 'rgba(16, 185, 129, 0.12)';

export const warning = '#f59e0b'; // Âmbar
export const warningHover = '#d97706'; // Âmbar escuro
export const warningLight = 'rgba(245, 158, 11, 0.12)';

export const info = '#3b82f6'; // Azul
export const infoHover = '#2563eb'; // Azul escuro
export const infoLight = 'rgba(59, 130, 246, 0.12)';

// ===== CORES DE TEXTO =====
export const textPrimary = '#f5f5f7'; // Branco suave (quase branco)
export const textSecondary = '#a1a1aa'; // Cinza claro
export const textMuted = '#71717a'; // Cinza médio
export const textDisabled = '#52525b'; // Cinza escuro

// ===== BORDAS =====
export const border = 'rgba(255, 255, 255, 0.08)'; // Branco muito transparente
export const borderHover = 'rgba(255, 255, 255, 0.16)'; // Branco semi-transparente
export const borderFocus = 'rgba(99, 102, 241, 0.4)'; // Indigo transparente

// ===== SOMBRAS (Tema Escuro) =====
// Sombras mais sutis para tema escuro
export const shadowSm = '0 1px 3px 0 rgba(0, 0, 0, 0.4)';
export const shadow = '0 4px 12px -1px rgba(0, 0, 0, 0.5)';
export const shadowMd = '0 6px 16px -1px rgba(0, 0, 0, 0.6)';
export const shadowLg = '0 10px 24px -3px rgba(0, 0, 0, 0.7)';
export const shadowXl = '0 20px 40px -5px rgba(0, 0, 0, 0.8)';

// Sombras coloridas (para elementos interativos)
export const shadowPrimary = '0 8px 24px -4px rgba(99, 102, 241, 0.4)';
export const shadowDanger = '0 8px 24px -4px rgba(239, 68, 68, 0.4)';
export const shadowSuccess = '0 8px 24px -4px rgba(16, 185, 129, 0.4)';

// ===== OVERLAYS =====
export const overlay = 'rgba(0, 0, 0, 0.6)'; // Overlay escuro
export const overlayLight = 'rgba(0, 0, 0, 0.4)'; // Overlay mais claro
export const overlayHeavy = 'rgba(0, 0, 0, 0.8)'; // Overlay muito escuro

// ===== GLASS MORPHISM =====
export const glass = 'rgba(26, 26, 36, 0.7)'; // Fundo vidro
export const glassBlur = 'blur(12px)'; // Blur para glassmorphism

// ===== GRADIENTES =====
export const gradientPrimary =
   'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
export const gradientDanger =
   'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
export const gradientSuccess =
   'linear-gradient(135deg, #10b981 0%, #059669 100%)';
export const gradientDark = 'linear-gradient(180deg, #0a0a0f 0%, #13131a 100%)';
export const gradientSubtle =
   'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)';

// ===== RAIOS DE BORDA =====
export const radiusSm = '6px';
export const radius = '10px';
export const radiusMd = '12px';
export const radiusLg = '16px';
export const radiusXl = '20px';
export const radius2xl = '24px';
export const radiusFull = '9999px';

// ===== TRANSIÇÕES =====
export const transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
export const transitionFast = 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
export const transitionSlow = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

// ===== ESPAÇAMENTOS =====
export const spacing = {
   xs: '4px',
   sm: '8px',
   md: '16px',
   lg: '24px',
   xl: '32px',
   '2xl': '48px',
   '3xl': '64px',
};

// ===== Z-INDEX =====
export const zIndex = {
   dropdown: 1000,
   sticky: 1020,
   fixed: 1030,
   modalBackdrop: 1040,
   modal: 1050,
   popover: 1060,
   tooltip: 1070,
};

// ===== BREAKPOINTS =====
export const breakpoints = {
   xs: '480px',
   sm: '640px',
   md: '768px',
   lg: '1024px',
   xl: '1280px',
   '2xl': '1536px',
};
