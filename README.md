# OTCosmicPayouts
Manual payout script for Origintrail jobs. Please ENSURE YOU ARE AWARE OF GAS COSTS associated with payout on each network you enable. More options for payouts to come.
<ol>
<li>sudo git clone https://github.com/CosmiCloud/OTCosmicPayouts.git</li>
<li>cd CosmicPayouts</li>
<li>sudo npm install dotenv</li>
<li>sudo nano .env</li>
<li>Provide NODE ID (not erc 725 ids) and set networks to YES if you want them to payout.</li>
<li>sudo node phat_payout.js</li>
</ol>
