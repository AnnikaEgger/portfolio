function initLegalNotice() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  renderLegalNotice();
}

function renderLegalNotice() {
  const contentWrapper = document.getElementById(
    "content-wrapper-legal-notice",
  );
  const headline = document.getElementById("legal-notice-h1");

  if (language === "german") {
    headline.innerText = "Impressum";
    contentWrapper.innerHTML = legalNoticeGermanHTML();
  } else {
    headline.innerText = "Legal Notice";
    contentWrapper.innerHTML = legalNoticeEnglishHTML();
  }
}

function legalNoticeGermanHTML() {
  return `      <div class="content-wrapper">
        <article class="imprint-article">
          <h2 class="legal-h2">Anschrift</h2>
          <ul>
            <li>Annika Egger</li>
            <li>Alte Schule 3</li>
            <li>86860 Jengen</li>
          </ul>
        </article>

        <article>
          <h3>Kontakt</h3>
          <p>kontakt@annika-egger.de</p>
        </article>

        <article>
          <h3>Akzeptanz der Bedingungen</h3>
          <p>
        Durch den Zugriff auf und die Nutzung von
            <span class="color-highlight">Portfolio</span> erkennen Sie die folgenden
            Allgemeinen Geschäftsbedingungen sowie alle Richtlinien,
            Leitlinien oder Änderungen daran, die Ihnen von
            Zeit zu Zeit vorgelegt werden, an und erklären sich damit einverstanden. Ich behalte mir vor, die Allgemeinen Geschäftsbedingungen von
            Zeit zu Zeit ohne vorherige Ankündigung zu aktualisieren oder zu ändern.
          </p>
        </article>

        <article>
          <h3>Umfang und Eigentum des Produkts</h3>
          <p>
      <span class="color-highlight">Das Portfolio</span> wurde im
            Rahmen eines Gruppenprojekts von Studierenden in einem Webentwicklungs-Bootcamp bei der
            <span class="color-highlight">Developer Akademie</span> GmbH entwickelt. Es dient
            Lernzwecken und ist nicht für den umfangreichen privaten und
            geschäftlichen Gebrauch vorgesehen. Daher kann ich keine Garantie für die ständige Verfügbarkeit,
            Zuverlässigkeit, Genauigkeit oder sonstige Qualitätsmerkmale dieses
            Produkts übernehmen. <br /><br />
               <span class="color-highlight">Portfolio</span> ist Eigentum der
            <span class="color-highlight">Developer Akademie</span> GmbH.
            Die unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder
            Nachbildung des Designs ist strengstens untersagt.
          </p>
        </article>

        <article>
          <h3>Eigentumsrechte</h3>
          <p>
            Abgesehen vom Design, das Eigentum der
            <span class="color-highlight">Developer Akademie</span> GmbH ist,
            behalte ich alle Eigentumsrechte an
            <span class="color-highlight">Portfolio</span>,
          einschließlich aller
            damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten
            Informationen.
            
          </p>
        </article>

        <article>
          <h3>Nutzung des Produkts</h3>
          <p>
            <span class="color-highlight">Portfolio</span> ist ausschließlich für
            rechtmäßige Zwecke bestimmt und muss in Übereinstimmung mit allen geltenden
            Gesetzen und Vorschriften genutzt werden. Jede Nutzung von
            <span class="color-highlight">Portfolio</span> für illegale
            Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung einer anderen
            Person ist strengstens untersagt. Sie sind allein verantwortlich für Ihre
            Interaktionen mit anderen Nutzern von
            <span class="color-highlight">Portfolio</span>.
          </p>
        </article>

        <article>
          <h3>Haftungsausschluss und Haftungsbeschränkung</h3>
          <p>
           <span class="color-highlight">Portfolio</span> wird „wie besehen“ bereitgestellt,
            ohne jegliche ausdrückliche oder stillschweigende Gewährleistung, einschließlich,
            aber nicht beschränkt auf die stillschweigenden Gewährleistungen der Marktgängigkeit,
            der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter. In keinem Fall
            hafte ich oder die
            <span class="color-highlight">Developer Akademie</span>
            für direkte, indirekte, zufällige, besondere, Folge- oder
            exemplarische Schäden, einschließlich, aber nicht beschränkt auf Schäden aufgrund von
            entgangenem Gewinn, Verlust von Firmenwert, Nutzungsausfall, Datenverlust oder anderen immateriellen Verlusten, selbst wenn ich
            auf die Möglichkeit solcher Schäden hingewiesen wurde, die sich aus
                 oder im Zusammenhang mit der Nutzung oder Erbringung von
            <span class="color-highlight">Portfolio</span> ergeben.

          </p>
        </article>

        <article>
          <h3>Haftungsfreistellung</h3>
          <p>
             Sie erklären sich damit einverstanden, mich, die
            <span class="color-highlight">Developer Akademie</span> sowie unsere
            verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Beauftragten und Mitarbeiter
            von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen
            (einschließlich angemessener Anwaltskosten), die sich aus Ihrer
            Nutzung von <span class="color-highlight">Portfolio</span> und/oder Ihrem
            Verstoß gegen diesen rechtlichen Hinweis ergeben oder damit in Zusammenhang stehen.<br /><br />
         Bei Fragen oder Anmerkungen wenden Sie sich bitte an mich unter
            <a href="mailto:kontakt@annika-egger.de">kontakt@annika-egger.de</a
            >. <br /><br />
            Datum: 13. Juli 2026
          </p>
        </article>
      </div>`;
}

function legalNoticeEnglishHTML() {
  return `      <div class="content-wrapper">
        <article class="imprint-article">
          <h2 class="legal-h2">Imprint</h2>
          <ul>
            <li>Annika Egger</li>
            <li>Alte Schule 3</li>
            <li>86860 Jengen</li>
          </ul>
        </article>

        <article>
          <h3>Contact</h3>
          <p>kontakt@annika-egger.de</p>
        </article>

        <article>
          <h3>Acceptance of terms</h3>
          <p>
            By accessing and using
            <span class="color-highlight">Portfolio</span>, you acknowledge and
            agree to the following terms and conditions, and any policies,
            guidelines, or amendments thereto that may be presented to you from
            time to time. I may update or change the terms and conditions from
            time to time without notice.
          </p>
        </article>

        <article>
          <h3>Scope and ownership of the product</h3>
          <p>
            <span class="color-highlight">Portfolio</span> has been developed as
            part of a student group project in a web development bootcamp at the
            <span class="color-highlight">Developer Akademie</span> GmbH. It has
            an educational purpose and is not intended for extensive personal &
            business usage. As such, I cannot guarantee consistent availability,
            reliability, accuracy, or any other aspect of quality regarding this
            Product. <br /><br />
            The design of
            <span class="color-highlight">Portfolio</span> is owned by the
            <span class="color-highlight">Developer Akademie</span> GmbH.
            Unauthorized use, reproduction, modification, distribution, or
            replication of the design is strictly prohibited.
          </p>
        </article>

        <article>
          <h3>Proprietary rights</h3>
          <p>
            Aside from the design owned by
            <span class="color-highlight">Developer Akademie</span> GmbH, I
            retain all proprietary rights in
            <span class="color-highlight">Portfolio</span>, including any
            associated copyrighted material, trademarks, and other proprietary
            information.
          </p>
        </article>

        <article>
          <h3>Use of the product</h3>
          <p>
            <span class="color-highlight">Portfolio</span> is intended to be
            used for lawful purposes only, in accordance with all applicable
            laws and regulations. Any use of
            <span class="color-highlight">Portfolio</span> for illegal
            activities, or to harass, harm, threaten, or intimidate another
            person, is strictly prohibited. You are solely responsible for your
            interactions with other users of
            <span class="color-highlight">Portfolio</span>.
          </p>
        </article>

        <article>
          <h3>Disclaimer of warranties and limitation of liability</h3>
          <p>
            <span class="color-highlight">Portfolio</span> is provided "as is"
            without warranty of any kind, whether express or implied, including
            but not limited to the implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. In no event
            will I or the
            <span class="color-highlight">Developer Akademie</span>, be liable
            for any direct, indirect, incidental, special, consequential or
            exemplary damages, including but not limited to, damages for loss of
            profits, goodwill, use, data, or other intangible losses, even if I
            have been advised of the possibility of such damages, arising out of
            or in connection with the use or performance of
            <span class="color-highlight">Portfolio</span>.
          </p>
        </article>

        <article>
          <h3>Indemnity</h3>
          <p>
            You agree to indemnify, defend and hold harmless me, the
            <span class="color-highlight">Developer Akademie</span>, and our
            affiliates, partners, officers, directors, agents, and employees,
            from and against any claim, demand, loss, damage, cost, or liability
            (including reasonable legal fees) arising out of or relating to your
            use of <span class="color-highlight">Portfolio</span> and/or your
            breach of this Legal Notice. <br /><br />
            For any questions or notices, please contact me at
            <a href="mailto:kontakt@annika-egger.de">kontakt@annika-egger.de</a
            >. <br /><br />
            Date: July 13, 2026
          </p>
        </article>
      </div>`;
}
