import { links } from "@/data/navigation";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Check,
  Grid2X2,
  Columns3,
  Warehouse,
  Layers3,
  Ruler,
  House,
  MessageCircle,
  ClipboardCheck,
  FileText,
  Hammer,
  Phone,
} from "lucide-react";
import {
  Header,
  Logo,
  Reveal,
  Projects,
  Videos,
  ContactForm,
  WhatsAppIcon,
} from "@/components/Interactive";
import { company, processSteps } from "@/data/company";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faq } from "@/data/faq";
import { whatsapp } from "@/lib/whatsapp";
import s from "@/components/Site.module.css";
const icons = [Columns3, Grid2X2, Warehouse, House, Layers3, Ruler];
const stepIcons = [MessageCircle, ClipboardCheck, FileText, Hammer];
function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className={s.sectionHeading}>
      <span className={s.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function BudgetLink({
  children = "Solicitar orçamento",
  outline = false,
}: {
  children?: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      className={`${s.button} ${outline ? s.outline : ""}`}
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: "+5543996959382",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR",
    },
    ...(company.url ? { url: company.url } : {}),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main">
        <section id="inicio" className={s.hero}>
          <div className={s.heroPhoto}>
            <Image
              src="/images/hero/welding.jpg"
              alt="Fotografia ilustrativa de um profissional trabalhando com metal em oficina industrial"
              fill
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className={s.heroOverlay} />
          <div className={s.heroGrid} />
          <div className={`${s.container} ${s.heroContent}`}>
            <Reveal>
              <span className={s.location}>
                <span /> SERRALHERIA EM CORNÉLIO PROCÓPIO / PR
              </span>
              <h1>
                Transformamos
                <br />
                ferro e aço em
                <br />
                <em>
                  projetos que
                  <br />
                  impressionam.
                </em>
              </h1>
              <p>
                Portões, grades, coberturas e estruturas metálicas.
                <br className={s.desktopBreak} /> Soluções sob medida para o seu
                projeto.
              </p>
              <div className={s.heroActions}>
                <BudgetLink />
                <a href="#projetos" className={`${s.button} ${s.outline}`}>
                  Conhecer nossos projetos
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className={s.heroTrust}>
                <span>
                  <Check size={15} /> Projetos sob medida
                </span>
                <span>
                  <Check size={15} /> Atenção em cada detalhe
                </span>
              </div>
            </Reveal>
          </div>
          <div className={s.heroSide}>
            PRECISÃO NO DETALHE. FORÇA NA ESTRUTURA.
          </div>
          <div className={`${s.container} ${s.heroBottom}`}>
            <a href="#sobre">
              <span className={s.scrollIcon}>
                <ArrowDown size={16} />
              </span>{" "}
              CONHEÇA A CASA FORTE
            </a>
            <span>IMAGEM ILUSTRATIVA</span>
          </div>
        </section>
        <div className={s.marquee} aria-hidden="true">
          <span>SOLIDEZ EM CADA ESCOLHA</span>
          <i>✳</i>
          <span>PRECISÃO EM CADA CORTE</span>
          <i>✳</i>
          <span>QUALIDADE EM CADA DETALHE</span>
          <i>✳</i>
          <span>SEU PROJETO, NOSSO COMPROMISSO</span>
        </div>
        <section id="sobre" className={`${s.section} ${s.about}`}>
          <div className={`${s.container} ${s.aboutGrid}`}>
            <Reveal className={s.aboutVisual}>
              <div className={s.aboutImage}>
                <Image
                  src="/images/hero/welding.jpg"
                  alt="Imagem ilustrativa de trabalho com ferramentas em uma oficina"
                  fill
                  sizes="(max-width:800px) 100vw, 45vw"
                />
                <span>IMAGEM ILUSTRATIVA</span>
              </div>
              <div className={s.aboutInset}>
                <Image
                  src="/images/projects/structure.svg"
                  alt="Estudo ilustrativo de estrutura em aço"
                  fill
                  sizes="240px"
                />
                <span>
                  FEITO PARA
                  <br />
                  <strong>DURAR.</strong>
                </span>
              </div>
              <span className={s.cornerLabel}>A ESSÊNCIA DA CASA FORTE</span>
            </Reveal>
            <Reveal>
              <Heading
                eyebrow="01 / QUEM SOMOS"
                title="Força, precisão e qualidade em cada projeto."
              />
              <p className={s.aboutText}>{company.about}</p>
              <div className={s.commitments}>
                {[
                  "Projetos sob medida",
                  "Atenção aos detalhes",
                  "Soluções resistentes",
                  "Atendimento próximo",
                ].map((item) => (
                  <span key={item}>
                    <Check size={17} />
                    {item}
                  </span>
                ))}
              </div>
              <a href="#contato" className={s.textLink}>
                Vamos conversar sobre sua ideia <ArrowUpRight size={19} />
              </a>
            </Reveal>
          </div>
        </section>
        <section id="servicos" className={`${s.section} ${s.services}`}>
          <div className={s.container}>
            <Reveal className={s.headingRow}>
              <Heading
                eyebrow="02 / O QUE FAZEMOS"
                title="Soluções em serralheria para cada necessidade."
                text="Do projeto à execução, conheça nossas soluções em estruturas e trabalhos metálicos."
              />
              <p className={s.asideText}>
                Soluções em serralheria
                <br />
                para cada necessidade.
                <span>Confira a disponibilidade com nossa equipe.</span>
              </p>
            </Reveal>
            <div className={s.serviceGrid}>
              {services.map((v, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={v.title}>
                    <article className={s.serviceCard}>
                      <div className={s.serviceTop}>
                        <Icon size={34} strokeWidth={1.3} />
                        <span>0{i + 1}</span>
                      </div>
                      <h3>{v.title}</h3>
                      <p>{v.description}</p>
                      <a
                        href={whatsapp(
                          `Olá! Gostaria de solicitar um orçamento para ${v.title.toLowerCase()}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar orçamento
                        <ArrowUpRight size={19} />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <section id="projetos" className={`${s.section} ${s.projects}`}>
          <div className={s.container}>
            <Reveal className={s.headingRow}>
              <Heading
                eyebrow="03 / FORMAS & POSSIBILIDADES"
                title="Nosso trabalho fala por si."
                text="Conheça referências de acabamentos e soluções para imaginar o seu próximo projeto."
              />
              <span className={s.outlinedLabel}>
                ESPAÇO PARA PROJETOS REAIS
              </span>
            </Reveal>
            <Projects />
          </div>
        </section>
        <section id="videos" className={`${s.section} ${s.videos}`}>
          <div className={s.container}>
            <Reveal>
              <Heading
                eyebrow="04 / EM CADA DETALHE"
                title="Veja a qualidade em cada detalhe."
                text="Um espaço para conhecer nossos projetos em movimento e observar cada acabamento."
              />
              <Videos />
            </Reveal>
          </div>
        </section>
        <section className={s.budget}>
          <Image src="/images/hero/welding.jpg" alt="" fill sizes="100vw" />
          <div className={s.budgetShade} />
          <div className={`${s.container} ${s.budgetInner}`}>
            <Reveal>
              <span className={s.eyebrow}>DA SUA IDEIA À REALIDADE</span>
              <h2>
                Seu próximo projeto merece
                <br />
                uma <em>estrutura forte.</em>
              </h2>
              <p>
                Conte para nós o que você precisa e solicite um orçamento
                <br />
                diretamente pelo WhatsApp.
              </p>
              <BudgetLink>Conversar pelo WhatsApp</BudgetLink>
            </Reveal>
            <div className={s.blueprint} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
        <section className={`${s.section} ${s.process}`}>
          <div className={s.container}>
            <Reveal>
              <Heading
                eyebrow="05 / COMO TRABALHAMOS"
                title="Do primeiro contato à realização do projeto."
                text="Do primeiro contato à realização do projeto, cada etapa tem sua importância."
              />
            </Reveal>
            <div className={s.steps}>
              {processSteps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <Reveal key={step.title} className={s.step}>
                    <div className={s.stepNumber}>
                      0{i + 1}
                      <Icon size={23} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        {testimonials.length > 0 && (
          <section className={s.section}>
            <div className={s.container}>
              <Heading
                eyebrow="QUEM CONFIA"
                title="A confiança dos nossos clientes."
              />
              <div className={s.serviceGrid}>
                {testimonials.map((t) => (
                  <blockquote className={s.serviceCard} key={t.name}>
                    <p>“{t.text}”</p>
                    <strong>{t.name}</strong>
                    {t.project && <p>{t.project}</p>}
                    {t.rating !== undefined && <p>Avaliação: {t.rating} / 5</p>}
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={`${s.section} ${s.faq}`}>
          <div className={`${s.container} ${s.faqGrid}`}>
            <Reveal>
              <Heading
                eyebrow="06 / PERGUNTAS FREQUENTES"
                title="Vamos esclarecer suas dúvidas."
              />
              <p>
                Não encontrou o que procura?
                <br />
                Converse diretamente com a nossa equipe.
              </p>
              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.textLink}
              >
                Falar com a Casa Forte <ArrowUpRight size={19} />
              </a>
            </Reveal>
            <div className={s.accordion}>
              {faq.map((f, i) => (
                <details key={f.q}>
                  <summary>
                    <span className={s.faqNumber}>0{i + 1}</span>
                    {f.q}
                    <span className={s.plus}>+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className={`${s.section} ${s.contact}`}>
          <div className={`${s.container} ${s.contactGrid}`}>
            <Reveal>
              <Heading
                eyebrow="07 / VAMOS CONVERSAR"
                title="Vamos tirar seu projeto do papel?"
                text="Toda grande ideia merece uma base forte. Estamos prontos para ouvir a sua."
              />
              <div className={s.contactInfo}>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  <span className={s.contactIcon}>
                    <Phone size={21} />
                  </span>
                  <span>
                    <small>FALE PELO WHATSAPP</small>
                    <strong>{company.phoneDisplay}</strong>
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                <div>
                  <span className={s.contactIcon}>
                    <MapPin size={22} />
                  </span>
                  <span>
                    <small>ONDE ESTAMOS</small>
                    <strong>Cornélio Procópio — Paraná</strong>
                  </span>
                </div>
              </div>
              <BudgetLink>Solicitar orçamento pelo WhatsApp</BudgetLink>
            </Reveal>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <footer className={s.footer}>
        <div className={`${s.container} ${s.footerGrid}`}>
          <div>
            <Logo />
            <p>
              Força, precisão e qualidade.
              <br />
              Soluções em serralheria para dar
              <br />
              forma ao seu próximo projeto.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            {links.slice(1).map(([name, id]) => (
              <a key={id} href={`#${id}`}>
                {name}
              </a>
            ))}
          </div>
          <div>
            <h3>Soluções</h3>
            {services.map((v) => (
              <a href="#servicos" key={v.title}>
                {v.title}
              </a>
            ))}
          </div>
          <div>
            <h3>Vamos conversar</h3>
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
              {company.phoneDisplay}
              <ArrowUpRight size={15} />
            </a>
            <p>
              Cornélio Procópio
              <br />
              Paraná, Brasil
            </p>
            {company.instagram && (
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
        <div className={`${s.container} ${s.footerBottom}`}>
          <span>
            © {new Date().getFullYear()} Serralheria Casa Forte. Todos os
            direitos reservados.
          </span>
          <a href="#inicio">
            FEITO COM FORÇA. PENSADO PARA VOCÊ.
            <ArrowRight size={14} />
          </a>
        </div>
      </footer>
      <a
        className={s.floatingWhatsapp}
        href={whatsapp()}
        aria-label="Solicite seu orçamento pelo WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={29} />
        <span>Solicite seu orçamento</span>
      </a>
    </>
  );
}
