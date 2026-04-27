import { openWhatsApp } from '../hooks/useWhatsApp';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <button
      className="wa-fab"
      onClick={() => openWhatsApp()}
      aria-label="Abrir WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.474 2.027 7.776L0 32l8.437-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.307 22.175c-.348.977-2.035 1.867-2.784 1.937-.714.067-1.386.336-4.671-.973-3.94-1.563-6.457-5.574-6.653-5.832-.196-.257-1.6-2.127-1.6-4.057 0-1.93 1.012-2.879 1.37-3.269.348-.38.76-.476 1.014-.476l.726.014c.233.01.546-.089.854.65.319.764 1.083 2.643 1.179 2.836.097.193.161.42.032.678-.13.257-.196.417-.387.643-.193.226-.407.505-.58.678-.194.193-.395.401-.17.787.226.387.997 1.645 2.139 2.663 1.47 1.31 2.71 1.716 3.096 1.909.387.193.613.161.84-.097.226-.257.969-1.13 1.227-1.517.257-.387.515-.322.87-.193.354.13 2.249 1.061 2.635 1.254.387.193.645.29.741.45.097.16.097.93-.251 1.903z"/>
      </svg>
      <span className="wa-fab__label">Fale conosco</span>
      <span className="wa-fab__pulse" />
    </button>
  );
}
