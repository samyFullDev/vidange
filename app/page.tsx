import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h1>Sélectionnez votre mode de paiement</h1>
        <div className="payment-options">
            <Link href="/orange" className="payment-option orange">Orange Money</Link>
            <Link href="/tmoney" className="payment-option tmoney">TMoney</Link>
            <Link href="/moov" className="payment-option moov">Moov Money</Link>
            <Link href="/wave" className="payment-option wave">Wave Money</Link>
            <Link href="/airtel" className="payment-option airtel">Airtel Money</Link>
        </div>
    </div>
    </div>
  );
}
