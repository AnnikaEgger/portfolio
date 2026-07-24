function initPrivacyPolicy() {
  getLanguageFromLocalStorage();
  styleLanguageButtons();
  renderPrivacyPolicy();
}

function renderPrivacyPolicy() {
  const contentWrapper = document.getElementById(
    "content-wrapper-privacy-policy",
  );
  const headline = document.getElementById("privacy-policy-h1");

  if (language === "german") {
    headline.innerHTML = "Daten&shy;schutz&shy;erklärung";
    contentWrapper.innerHTML = privacyPolicyGermanHTML();
  } else {
    headline.innerText = "Privacy Policy";
    contentWrapper.innerHTML = privacyPolicyEnglishHTML();
  }
}

function privacyPolicyGermanHTML() {
  return ` <h2 class="legal-h2">1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>
        <h4>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>
        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden. Sofern &uuml;ber die
          Website Vertr&auml;ge geschlossen oder angebahnt werden k&ouml;nnen,
          werden die &uuml;bermittelten Daten auch f&uuml;r Vertragsangebote,
          Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </p>
        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>
        <h2>2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3>Hetzner</h3>
        <p>
          Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
          Gunzenhausen (nachfolgend Hetzner).
        </p>
        <p>
          Details entnehmen Sie der Datenschutzerkl&auml;rung von Hetzner:
          <a
            href="https://www.hetzner.com/de/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.hetzner.com/de/legal/privacy-policy/</a
          >.
        </p>
        <p>
          Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
          m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern
          eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im
          Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
          des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>

        <h4>Auftragsverarbeitung</h4>
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
          Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es
          sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
          Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
          DSGVO verarbeitet.
        </p>
        <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Annika Egger<br />
          Alte Schule 3<br />
          86860 Jengen
        </p>

        <p>
          Telefon: +49 177 1401715<br />
          E-Mail: kontakt@annika-egger.de
        </p>
        <p>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&nbsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </p>
        <h3>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
          jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
          folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </p>
        <h3>Empf&auml;nger von personenbezogenen Daten</h3>
        <p>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
          verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine
          &Uuml;bermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
          externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
          Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6
          Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
          wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </p>
        <h3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
          IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
          F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
          MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG
          VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </p>
        <h3>
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </h3>
        <p>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>
        <h3>Auskunft, Berichtigung und L&ouml;schung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel
            Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
          eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
          nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
          wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </p>
        <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
          oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
          bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen
          die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten
          mitgelesen werden.
        </p>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
          den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
          Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
          vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
          &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
          berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
          entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
          Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
          Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        </p>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
          Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
          vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
          &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
          berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
          verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
          Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
          Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
          &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben
          unber&uuml;hrt.
        </p>
        <p>
          Quelle:
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>`;
}

function privacyPolicyEnglishHTML() {
  return `<h2 class="legal-h2">1. Data protection at a glance</h2>
<h3>General information</h3>
<p>
  The following information provides a simple overview of what happens to your
  personal data when you visit this website. Personal data is any data that can
  be used to personally identify you. Detailed information on the subject of
  data protection can be found in our privacy policy listed below this text.
</p>
<h3>Data collection on this website</h3>
<h4>
  Who is responsible for data collection on this website?
</h4>
<p>
  Data processing on this website is carried out by the website operator. You
  can find the operator's contact details in the section "Information on the
  responsible party" in this privacy policy.
</p>
<h4>How do we collect your data?</h4>
<p>
  Some data is collected when you provide it to us. This may include, for
  example, data that you enter into a contact form.
</p>
<p>
  Other data is collected automatically or after your consent when you visit
  the website by our IT systems. This is primarily technical data (e.g.
  internet browser, operating system, or time of page access). This data is
  collected automatically as soon as you enter this website.
</p>
<h4>What do we use your data for?</h4>
<p>
  Some of the data is collected to ensure that the website is provided
  without errors. Other data may be used to analyze your user behavior. If
  contracts can be concluded or initiated via the website, the transmitted
  data will also be processed for contract offers, orders, or other inquiries.
</p>
<h4>What rights do you have regarding your data?</h4>
<p>
  You have the right at any time to receive information free of charge about
  the origin, recipients, and purpose of your stored personal data. You also
  have the right to request the correction or deletion of this data. If you
  have given consent to data processing, you can revoke this consent at any
  time for the future. Furthermore, under certain circumstances, you have the
  right to request the restriction of the processing of your personal data.
  You also have the right to lodge a complaint with the competent supervisory
  authority.
</p>
<p>
  For this purpose, as well as for further questions regarding data protection,
  you can contact us at any time.
</p>
<h2>2. Hosting</h2>
<p>We host the content of our website with the following provider:</p>
<h3>Hetzner</h3>
<p>
  The provider is Hetzner Online GmbH, Industriestr. 25, 91710
  Gunzenhausen (hereinafter referred to as Hetzner).
</p>
<p>
  For details, please refer to Hetzner's privacy policy:
  <a
    href="https://www.hetzner.com/de/legal/privacy-policy/"
    target="_blank"
    rel="noopener noreferrer"
    >https://www.hetzner.com/de/legal/privacy-policy/</a
  >.
</p>
<p>
  The use of Hetzner is based on Art. 6 para. 1 lit. f GDPR. We have a
  legitimate interest in ensuring the most reliable presentation of our
  website possible. If corresponding consent has been requested, processing is
  carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and
  Section 25 para. 1 TDDDG, insofar as the consent includes the storage of
  cookies or access to information on the user's device (e.g. device
  fingerprinting) within the meaning of the TDDDG. Consent can be revoked at
  any time.
</p>

<h4>Data processing agreement</h4>
<p>
  We have concluded a data processing agreement (DPA) for the use of the
  above-mentioned service. This is a legally required agreement under data
  protection law, which ensures that the provider processes the personal data
  of our website visitors only according to our instructions and in
  compliance with the GDPR.
</p>
<h2>3. General information and mandatory information</h2>
<h3>Data protection</h3>
<p>
  The operators of these pages take the protection of your personal data very
  seriously. We treat your personal data confidentially and in accordance with
  the statutory data protection regulations as well as this privacy policy.
</p>
<p>
  When you use this website, various personal data is collected. Personal data
  is data that can be used to personally identify you. This privacy policy
  explains which data we collect and what we use it for. It also explains how
  and for what purpose this is done.
</p>
<p>
  We would like to point out that data transmission over the Internet (e.g.
  when communicating via email) may have security vulnerabilities. Complete
  protection of data against access by third parties is not possible.
</p>
<h3>Information on the responsible party</h3>
<p>
  The responsible party for data processing on this website is:
</p>
<p>
  Annika Egger<br />
  Alte Schule 3<br />
  86860 Jengen
</p>

<p>
  Phone: +49 177 1401715<br />
  Email: kontakt@annika-egger.de
</p>
<p>
  The responsible party is the natural or legal person who, alone or jointly
  with others, decides on the purposes and means of processing personal data
  (e.g. names, email addresses, etc.).
</p>

<h3>Storage duration</h3>
<p>
  Unless a more specific storage period has been specified within this privacy
  policy, your personal data will remain with us until the purpose for data
  processing no longer applies. If you assert a justified request for deletion
  or revoke your consent to data processing, your data will be deleted unless
  we have other legally permissible reasons for storing your personal data
  (e.g. retention periods under tax or commercial law); in the latter case,
  deletion will take place after these reasons no longer apply.
</p>
<h3>
  General information on the legal basis for data processing on this website
</h3>
<p>
  If you have given your consent to data processing, we process your personal
  data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR,
  if special categories of data are processed according to Art. 9 para. 1 GDPR.
  In the event of explicit consent to the transfer of personal data to third
  countries, data processing is also carried out on the basis of Art. 49 para.
  1 lit. a GDPR. If you have consented to the storage of cookies or access to
  information on your device (e.g. via device fingerprinting), data processing
  is additionally carried out on the basis of Section 25 para. 1 TDDDG.
  Consent can be revoked at any time. If your data is required for the
  performance of a contract or for the implementation of pre-contractual
  measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR.
  Furthermore, we process your data if this is necessary to fulfill a legal
  obligation on the basis of Art. 6 para. 1 lit. c GDPR. Data processing may
  also be carried out on the basis of our legitimate interest pursuant to
  Art. 6 para. 1 lit. f GDPR. Information on the respective applicable legal
  bases in individual cases is provided in the following sections of this
  privacy policy.
</p>
<h3>Recipients of personal data</h3>
<p>
  As part of our business activities, we work with various external parties.
  In some cases, this also requires the transfer of personal data to these
  external parties. We only disclose personal data to external parties if this
  is necessary for the fulfillment of a contract, if we are legally obliged to
  do so (e.g. disclosure of data to tax authorities), if we have a legitimate
  interest in the disclosure pursuant to Art. 6 para. 1 lit. f GDPR, or if
  another legal basis permits the transfer of data. When using data processors,
  we only share our customers' personal data on the basis of a valid data
  processing agreement. In the case of joint processing, a joint processing
  agreement is concluded.
</p>
<h3>Withdrawal of your consent to data processing</h3>
<p>
  Many data processing operations are only possible with your express consent.
  You can withdraw any consent you have already given at any time. The
  lawfulness of data processing carried out until the withdrawal remains
  unaffected by the withdrawal.
</p>
<h3>
  Right to object to data collection in special cases and to direct marketing
  (Art. 21 GDPR)
</h3>
<p>
  IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F
  GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR
  PERSONAL DATA FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO
  APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS
  ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU
  OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE CAN
  DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE
  YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES THE
  ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO
  ART. 21 PARA. 1 GDPR).
</p>
<p>
  IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT MARKETING, YOU
  HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA
  CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO
  PROFILING, INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT MARKETING. IF YOU
  OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR THE PURPOSE OF DIRECT
  MARKETING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).
</p>
<h3>
  Right to lodge a complaint with the competent supervisory authority
</h3>
<p>
  In the event of violations of the GDPR, data subjects have the right to lodge
  a complaint with a supervisory authority, in particular in the Member State
  of their habitual residence, place of work, or the place of the alleged
  infringement. The right to lodge a complaint is without prejudice to any
  other administrative or judicial remedies.
</p>
<h3>Right to data portability</h3>
<p>
  You have the right to receive data that we process automatically based on
  your consent or in fulfillment of a contract, either yourself or transferred
  to a third party, in a commonly used and machine-readable format. If you
  request the direct transfer of the data to another responsible party, this
  will only be carried out where technically feasible.
</p>
<h3>Information, correction, and deletion</h3>
<p>
  Within the framework of applicable legal provisions, you have the right at
  any time to receive free information about your stored personal data, its
  origin and recipients, and the purpose of data processing, as well as the
  right to request the correction or deletion of this data. For this purpose,
  as well as for further questions regarding personal data, you can contact us
  at any time.
</p>
<h3>Right to restriction of processing</h3>
<p>
  You have the right to request the restriction of the processing of your
  personal data. You can contact us at any time for this purpose. The right to
  restriction of processing applies in the following cases:
</p>
<ul>
  <li>
    If you dispute the accuracy of your personal data stored by us, we usually
    need time to verify this. For the duration of the review, you have the
    right to request the restriction of the processing of your personal data.
  </li>
  <li>
    If the processing of your personal data was/is unlawful, you may request
    the restriction of data processing instead of deletion.
  </li>
  <li>
    If we no longer need your personal data, but you require it for the
    exercise, defense, or assertion of legal claims, you have the right to
    request the restriction of the processing of your personal data instead of
    its deletion.
  </li>
  <li>
    If you have objected pursuant to Art. 21 para. 1 GDPR, a balance must be
    made between your interests and ours. As long as it has not yet been
    determined whose interests prevail, you have the right to request the
    restriction of the processing of your personal data.
  </li>
</ul>
<p>
  If you have restricted the processing of your personal data, this data may
  only be processed – apart from its storage – with your consent or for the
  establishment, exercise, or defense of legal claims or for the protection of
  the rights of another natural or legal person or for reasons of an important
  public interest of the European Union or a Member State.
</p>
<h3>SSL or TLS encryption</h3>
<p>
  This website uses SSL or TLS encryption for security reasons and to protect
  the transmission of confidential content, such as orders or inquiries that
  you send to us as the website operator. You can recognize an encrypted
  connection by the browser address line changing from
  &bdquo;http://&ldquo; to &bdquo;https://&ldquo; and by the lock symbol in
  your browser bar.
</p>
<p>
  If SSL or TLS encryption is activated, the data you transmit to us cannot be
  read by third parties.
</p>
<h2>4. Data collection on this website</h2>
<h3>Contact form</h3>
<p>
  If you send us inquiries via the contact form, your details from the inquiry
  form, including the contact information you provide there, will be stored by
  us for the purpose of processing the inquiry and in case of follow-up
  questions. We do not share this data without your consent.
</p>
<p>
  The processing of this data is based on Art. 6 para. 1 lit. b GDPR, insofar
  as your inquiry is related to the fulfillment of a contract or is necessary
  for the implementation of pre-contractual measures. In all other cases,
  processing is based on our legitimate interest in the effective handling of
  inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent
  (Art. 6 para. 1 lit. a GDPR), if this has been requested; consent can be
  revoked at any time.
</p>
<p>
  The data you enter into the contact form will remain with us until you
  request its deletion, revoke your consent to storage, or the purpose for data
  storage no longer applies (e.g. after your inquiry has been fully processed).
  Mandatory legal provisions – especially retention periods – remain
  unaffected.
</p>
<h3>Inquiry by email, phone, or fax</h3>
<p>
  If you contact us by email, phone, or fax, your inquiry including all
  personal data resulting from it (name, inquiry) will be stored and processed
  by us for the purpose of handling your request. We do not share this data
  without your consent.
</p>
<p>
  The processing of this data is based on Art. 6 para. 1 lit. b GDPR, insofar
  as your inquiry is related to the fulfillment of a contract or is necessary
  for the implementation of pre-contractual measures. In all other cases,
  processing is based on our legitimate interest in the effective handling of
  inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent
  (Art. 6 para. 1 lit. a GDPR), if this has been requested; consent can be
  revoked at any time.
</p>
<p>
  The data you send to us via contact inquiries will remain with us until you
  request its deletion, revoke your consent to storage, or the purpose for data
  storage no longer applies (e.g. after your request has been fully processed).
  Mandatory legal provisions – especially statutory retention periods – remain
  unaffected.
</p>
<p>
  Source:
  <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
</p>`;
}
