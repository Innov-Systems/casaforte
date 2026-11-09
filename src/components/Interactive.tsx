"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Send,
} from "lucide-react";
import { categories, projects, type Category } from "@/data/projects";
import { videos, type ProjectVideo } from "@/data/videos";
import { services } from "@/data/services";
import { whatsapp } from "@/lib/whatsapp";
import s from "./Site.module.css";
import { links } from "@/data/navigation";
export function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={s.imageFallback} role="img" aria-label={props.alt}>
      CASA FORTE · Imagem indisponível
    </div>
  ) : (
    <Image {...props} alt={props.alt} onError={() => setFailed(true)} />
  );
}
export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 0 0-8.66 15L2 22l5.13-1.34A10 10 0 1 0 12 2Zm0 1.7a8.3 8.3 0 1 1-4.25 15.43l-.3-.18-3.04.8.81-2.96-.2-.32A8.3 8.3 0 0 1 12 3.7Z"
      />
      <path d="M16.72 13.88c-.25-.13-1.49-.74-1.72-.82-.23-.09-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.26-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.12.25-.3.38-.45.12-.14.17-.25.25-.42.09-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.43-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.26-.89.87-.89 2.11 0 1.24.91 2.44 1.03 2.61.13.17 1.79 2.73 4.34 3.82.61.26 1.08.41 1.45.52.61.19 1.16.16 1.59.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
export function Logo() {
  return (
    <a href="#inicio" className={s.logo} aria-label="Casa Forte — início">
      <Image
        className={s.logoImage}
        src="/Logo Serralheria Casa Forte.png"
        alt="Serralheria Casa Forte"
        width={1536}
        height={1024}
        sizes="(max-width: 600px) 132px, 200px"
        priority
      />
    </a>
  );
}
export function Header() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.headerInner}>
        <Logo />
        <nav aria-label="Navegação principal" className={s.desktopNav}>
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`}>
              {name}
            </a>
          ))}
        </nav>
        <a
          className={`${s.button} ${s.headerCta}`}
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon /> Solicitar orçamento
        </a>
        <button
          className={s.menuButton}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className={s.mobileNav}
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
          >
            {links.map(([name, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
                {name}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
function Modal({
  children,
  onClose,
  label,
}: {
  children: ReactNode;
  onClose: () => void;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const els = ref.current?.querySelectorAll<HTMLElement>(
          "button,a[href],video,iframe",
        );
        if (!els?.length) return;
        const first = els[0],
          last = els[els.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === ref.current)
        ) {
          e.preventDefault();
          last.focus();
        } else if (
          !e.shiftKey &&
          (document.activeElement === last ||
            document.activeElement === ref.current)
        ) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [onClose]);
  return (
    <div className={s.modalBackdrop} onClick={onClose}>
      <div
        className={s.modal}
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.close} onClick={onClose} aria-label="Fechar modal">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
export function Projects() {
  const reduced = useReducedMotion();
  const [category, setCategory] = useState<Category>("Todos");
  const [selected, setSelected] = useState<number | null>(null);
  const [frame, setFrame] = useState(0);
  const filtered = projects.filter(
    (p) => category === "Todos" || p.category === category,
  );
  const project = selected === null ? null : filtered[selected];
  function move(dir: number) {
    if (!project || selected === null) return;
    const next = frame + dir;
    if (next >= 0 && next < project.images.length) setFrame(next);
    else {
      setSelected((selected + dir + filtered.length) % filtered.length);
      setFrame(0);
    }
  }
  useEffect(() => {
    if (selected === null) return;
    function key(e: KeyboardEvent) {
      if (e.key === "ArrowRight")
        document.getElementById("next-project")?.click();
      if (e.key === "ArrowLeft")
        document.getElementById("previous-project")?.click();
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [selected]);
  return (
    <>
      <div className={s.filters} aria-label="Filtrar projetos">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? s.activeFilter : ""}
            aria-pressed={c === category}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout={!reduced} className={s.projectGrid}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.button
              layout={!reduced}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              className={s.projectCard}
              key={p.id}
              onClick={() => {
                setSelected(i);
                setFrame(0);
              }}
              aria-label={`Ampliar ${p.title}`}
            >
              <SafeImage
                src={p.coverImage}
                alt={p.alt}
                fill
                sizes="(max-width: 700px) 100vw, 60vw"
              />
              {p.demo && (
                <span className={s.demoTag}>REFERÊNCIA ILUSTRATIVA</span>
              )}
              <span className={s.projectInfo}>
                <span>
                  <small>{p.category}</small>
                  <strong>{p.title}</strong>
                </span>
                <span className={s.roundArrow}>
                  <ArrowUpRight />
                </span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      {!filtered.length && (
        <p className={s.empty}>
          Novas referências serão adicionadas aqui. Converse com a equipe sobre
          sua ideia.
        </p>
      )}
      {projects.some((p) => p.demo) && (
        <p className={s.galleryNote}>
          Galeria demonstrativa · As imagens identificadas são ilustrações de
          referência, não obras realizadas pela Casa Forte.
        </p>
      )}
      {project && (
        <Modal label={project.title} onClose={() => setSelected(null)}>
          <div className={s.lightboxImage}>
            <SafeImage
              src={project.images[frame]}
              alt={project.alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={s.lightboxCaption}>
            <div>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
            </div>
            <div className={s.modalControls}>
              <button
                id="previous-project"
                onClick={() => move(-1)}
                aria-label="Imagem anterior"
              >
                <ChevronLeft />
              </button>
              <button
                id="next-project"
                onClick={() => move(1)}
                aria-label="Próxima imagem"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
function youtubeEmbed(src: string) {
  try {
    const u = new URL(src);
    const id =
      u.hostname === "youtu.be"
        ? u.pathname.slice(1)
        : u.searchParams.get("v") || u.pathname.split("/").pop();
    return id && /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : null;
  } catch {
    return null;
  }
}
export function Videos() {
  const [selected, setSelected] = useState<ProjectVideo | null>(null);
  return (
    <>
      {videos.length ? (
        <div className={s.videoGrid}>
          {videos.map((v) => (
            <button
              className={s.videoCard}
              key={v.id}
              onClick={() => setSelected(v)}
            >
              <div className={s.videoThumb}>
                <SafeImage
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  sizes="(max-width:700px) 100vw, 33vw"
                />
                <span>
                  <Play fill="currentColor" />
                </span>
              </div>
              <small>{v.category}</small>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className={s.videoEmpty}>
          <span className={s.playOutline}>
            <Play size={30} />
          </span>
          <div>
            <h3>Nosso trabalho, por um novo ângulo.</h3>
            <p>
              Em breve, vídeos dos projetos e dos detalhes que fazem a
              diferença.
            </p>
          </div>
          <span className={s.soon}>EM BREVE</span>
        </div>
      )}
      {selected && (
        <Modal label={selected.title} onClose={() => setSelected(null)}>
          {selected.type === "mp4" ? (
            <video
              className={s.videoPlayer}
              src={selected.src}
              controls
              playsInline
              preload="metadata"
            />
          ) : youtubeEmbed(selected.src) ? (
            <iframe
              className={s.videoPlayer}
              src={youtubeEmbed(selected.src)!}
              title={selected.title}
              allowFullScreen
              allow="encrypted-media; picture-in-picture"
            />
          ) : (
            <p>Vídeo indisponível.</p>
          )}
          <h3>{selected.title}</h3>
        </Modal>
      )}
    </>
  );
}
export function ContactForm() {
  const [error, setError] = useState("");
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") || "").trim(),
          phone = String(data.get("phone") || "").trim(),
          service = String(data.get("service") || ""),
          message = String(data.get("message") || "").trim();
        if (
          name.length < 2 ||
          phone.replace(/\D/g, "").length < 10 ||
          phone.replace(/\D/g, "").length > 13 ||
          !service ||
          message.length < 5
        ) {
          setError(
            "Confira seu nome, telefone com DDD, serviço e uma mensagem de pelo menos 5 caracteres.",
          );
          return;
        }
        setError("");
        window.open(
          whatsapp(
            `Olá! Encontrei a Casa Forte pelo site e gostaria de solicitar um orçamento.\n\nNome: ${name}\nTelefone: ${phone}\nServiço: ${service}\nMensagem: ${message}`,
          ),
          "_blank",
          "noopener,noreferrer",
        );
      }}
    >
      <h3>Conte um pouco sobre sua ideia.</h3>
      <div className={s.formRow}>
        <label>
          Seu nome
          <input
            name="name"
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            minLength={2}
            maxLength={100}
            required
          />
        </label>
        <label>
          WhatsApp
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(43) 99999-9999"
            maxLength={20}
            required
          />
        </label>
      </div>
      <label>
        Tipo de serviço
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Selecione uma opção
          </option>
          {services.map((v) => (
            <option key={v.title}>{v.title}</option>
          ))}
          <option>Outro / Quero orientação</option>
        </select>
      </label>
      <label>
        Seu projeto
        <textarea
          name="message"
          rows={4}
          placeholder="Conte o que você precisa. Se tiver medidas, pode incluir aqui."
          minLength={5}
          maxLength={3000}
          required
        />
      </label>
      {error && (
        <p role="alert" className={s.error}>
          {error}
        </p>
      )}
      <button className={s.button} type="submit">
        Enviar pelo WhatsApp
        <Send size={17} />
      </button>
      <p className={s.formNote}>
        Você será direcionado ao WhatsApp. Seus dados não são armazenados neste
        site.
      </p>
    </form>
  );
}
