import closeruma from '../../assets/closeruma.png';
import { text, topBar, image } from './TopBar.css';

export function TopBar({ onCheek }: { onCheek: () => void }) {
    return (
        <header className={topBar}>
            <img src={closeruma} alt="ruma closed" onClick={onCheek} width="48px" height="48px" className={image} />
            <div className={text}>budo.moe</div>
        </header>
    );
}
