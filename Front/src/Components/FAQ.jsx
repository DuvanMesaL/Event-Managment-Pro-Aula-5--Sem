import React, { useEffect, useRef, useState } from "react";
import "../styles/Accordion.css";
import plus from "../assets/Icons/plus.svg";
import minus from "../assets/Icons/minus.svg";

const Accordion = ({ question, answer, isOpen, toggleOpen }) => {
    const detailsRef = useRef(null);
    const summaryRef = useRef(null);
    const contentRef = useRef(null);
    const [animation, setAnimation] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        const el = detailsRef.current;
        const summary = summaryRef.current;
        const content = contentRef.current;
        const expandIcon = summary.querySelector(".expand-icon");

        const onClick = (e) => {
            e.preventDefault();
            el.style.overflow = "hidden";

            if (isClosing || !el.open) {
                open();
            } else if (isExpanding || el.open) {
                shrink();
            }
        };

        const shrink = () => {
            setIsClosing(true);

            const startHeight = `${el.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight}px`;

            if (animation) {
                animation.cancel();
            }

            const newAnimation = el.animate(
                {
                    height: [startHeight, endHeight],
                },
                {
                    duration: 400,
                    easing: "ease-out",
                }
            );

            newAnimation.onfinish = () => {
                expandIcon.src = plus;
                onAnimationFinish(false);
            };
            newAnimation.oncancel = () => {
                expandIcon.src = plus;
                setIsClosing(false);
            };

            setAnimation(newAnimation);
        };

        const open = () => {
            el.style.height = `${el.offsetHeight}px`;
            el.open = true;
            window.requestAnimationFrame(() => expand());
        };

        const expand = () => {
            setIsExpanding(true);

            const startHeight = `${el.offsetHeight}px`;
            const endHeight = `${
                summary.offsetHeight + content.offsetHeight
            }px`;

            if (animation) {
                animation.cancel();
            }

            const newAnimation = el.animate(
                {
                    height: [startHeight, endHeight],
                },
                {
                    duration: 350,
                    easing: "ease-out",
                }
            );

            newAnimation.onfinish = () => {
                expandIcon.src = minus;
                onAnimationFinish(true);
            };
            newAnimation.oncancel = () => {
                expandIcon.src = minus;
                setIsExpanding(false);
            };

            setAnimation(newAnimation);
        };

        const onAnimationFinish = (open) => {
            el.open = open;
            setAnimation(null);
            setIsClosing(false);
            setIsExpanding(false);
            el.style.height = el.style.overflow = "";
        };

        summary.addEventListener("click", onClick);

        return () => {
            summary.removeEventListener("click", onClick);
        };
    }, [animation, isClosing, isExpanding]);

    return (
        <details ref={detailsRef} open={isOpen}>
            <summary ref={summaryRef}>
                <span className="faq-title">{question}</span>
                <img src={plus} className="expand-icon" alt="Plus" />
            </summary>
            <div ref={contentRef} className="faq-content">
                {answer}
            </div>
        </details>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Quienes somos?",
            answer: "Somos un equipo apasionado de estudiantes y profesionales dedicados a revolucionar la forma en que se organizan los eventos. Desde nuestras aulas en la Universidad de Cartagena, hemos desarrollado un software innovador que actúa como puente entre usuarios y empresas de eventos, facilitando la comunicación y coordinación necesarias para planificar eventos exitosos. Con un enfoque en la integración tecnológica y la experiencia del usuario, trabajamos incansablemente para crear herramientas que simplifiquen y mejoren cada aspecto de la organización de eventos, beneficiando tanto a los individuos como a las empresas involucradas.",
        },
        {
            question: "Cual Es Nuestra Mision?",
            answer: "Nuestra misión es facilitar la interacción entre usuarios y empresas de eventos mediante el desarrollo de un software intuitivo y eficiente. Nos enfocamos en mejorar la comunicación y la coordinación durante la planificación de eventos, ofreciendo herramientas tecnológicas avanzadas que optimizan la experiencia tanto de los usuarios como de las empresas organizadoras.",
        },
        {
            question: "Cual Es nuestra Vision?",
            answer: "Nuestra visión es convertirnos en la plataforma líder de gestión de eventos en la región, reconocida por nuestra innovación, eficiencia y capacidad para transformar la manera en que las personas y las empresas organizan eventos. Aspiramos a expandir nuestro impacto, mejorando continuamente nuestro software para adaptarnos a las necesidades cambiantes de nuestros usuarios y clientes.",
        },
        {
            question: "Cuales Son Nuestros Valores?",
            answer: "Nos esforzamos por integrar las últimas tecnologías para ofrecer soluciones creativas y efectivas en la gestión de eventos. Nos comprometemos a proporcionar un software robusto y confiable que mejore significativamente la experiencia de nuestros usuarios. Fomentamos un entorno de trabajo en equipo y cooperación tanto dentro de nuestra organización como con nuestros clientes y usuarios. Promovemos la honestidad y la claridad en todas nuestras interacciones y procesos. Nos dedicamos a entender y satisfacer las necesidades de nuestros usuarios, buscando siempre superar sus expectativas.",
        },
        {
            question: "Cual es nueustra historia?",
            answer: "Este proyecto nació en el aula de la Universidad de Cartagena, inspirado por la necesidad de mejorar la comunicación y coordinación en la organización de eventos. Durante una clase de Desarrollo de Software, un grupo de estudiantes identificó las dificultades que enfrentan tanto los usuarios como las empresas en la planificación de eventos, y decidieron desarrollar una solución tecnológica para abordarlas.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggleOpen={() => toggleOpen(index)}
                />
            ))}
        </div>
    );
};

export default FAQ;
