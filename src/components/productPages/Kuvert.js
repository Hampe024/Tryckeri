import "../../style/css/products/kuvert.css";

import ImgSlider from "../ImgSlider";
import OrderBtn from "../OrderBtn";
import FunFact from "../FunFact";

export default function Kuvert() {
    return (
        <div>
            <div className="introText">
                <ImgSlider pictures={[
                    require(`../../style/img/products/kuvert/kirjekuori.png`),
                    require(`../../style/img/products/kuvert/kuvert.jpg`),
                    require(`../../style/img/products/kuvert/kuvert_1.jpg`),
                    ]} />
                <h2>Stick ut!</h2>
                <p> 
                    Kuvertet idag är det första kunden får i sin hand när Du skickar något till denne och det är på så vis även här Ditt företags ansikte utåt. Kuvertet bör utstråla seriösitet, stil och soliditet för att mottagarens uppmärksamhet och nyfikenhet hamnar på just Ditt företag. Ett solitt och korrekt "ansikte" borgar för framgång då kunder tar Dig på allvar. Lägg därför stor möda på utformningen även av kuvertet. Visst slängs kuvertet direkt efter det öppnats som oftast men om Du åandrasidan använder Ditt företags logo färger och färgar in kuvertet på ett snyggt och ovanligt sätt (kostar inget extra hos PlusPrint) så kan jag nästan lova att en betydligt högre procent kommer att haja till och minnas just Ditt företag och dess kuvert.
                    <br/>
                    <b>Kom ihåg - Alla Dina trycksaker är marknadsföring !</b>
                </p>
            </div>
            
            <div className="papper">
                <h2>Välj rätt sort</h2>
                <p>
                    Dyra och / eller snygga pappers sorter kan vara;  Conqueror, Sweden Bond eller Tre Kronor. Dessa papperssorter kostar upp till 10 ggr mer än vanligt vitt och kan tyckas bortkastat men vill man ha en enhetlig profil på företagets trycksaker ingår även kuvertet. Det kan altså vara av yttersta vikt att kolla upp pris och om det finns kuvert i alla storlekar som ni behöver. 
                </p>
                <p>
                    PlusPrint vill rekomendera att ett "miljövänligt" papper finns med i valet till profil. Cyklus, det miljövänliga alternativet bestående av returpapper, har kommit på några få år att placera sig som nästan lika billigt som standard vitt och det kan man väl tacka miljötänkandet tillika krav hos gemene kund för. Cyklus förekommer allt oftare eftersom den finns som en komplett profilserie till produkter som; visitkort, brevpapper, kuvert och foldrar. PlusPrint har valt Cyclus av miljöskäl.
                </p>
            </div>

            <div className="format">
                <h2>Format</h2>
                <p>
                    Kuvertets stora genombrott skedde någon gång runt 1840-talet. Fram tills dess vek man samman brevet självt och fäste flikarna med sigill.
                    <br/><br/>
                    Dåtidens pappersmakare insåg snabbt en ny obruten marknad främst på grund av det otal storlekar som figurerade. Grundtanken med kuvert var att skydda brevet från förstörelse och insyn av obehöriga. Sigillet levde dock kvar.
                    <br/><br/>
                    Allt sedan 1900-talets början insåg man behovet av standardlisering av storlekarna. 
                    <br/><br/>
                    Här ser ni de vanligaste formaten och deras mått. PlusPrint rekomenderar att ni väljer en fönsterplacering som passar era fakturor eller andra dokument så slipper ni adressera era kuvert. Det förenklar faktureringen att slippa skriva adressen när den redan finns på fakturan redo att visas i fönstret.
                    <br/><br/>
                    <b>C4</b> passar ovikt A4
                    <br/>
                    <b>C5</b> passar vikt A4
                    <br/>
                    <b>E65</b> passar till A4-papper vikta 2 ggr.
                </p>
                <img src={require(`../../style/img/products/kuvert/formatguide.jpg`)} alt="format guide"/>
            </div>

            <OrderBtn width={"120px"}>Beställ nu!</OrderBtn>
        </div>
    )
}