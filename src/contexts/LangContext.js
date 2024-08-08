import React from 'react';

const constants = {
    name: 'Elena Arniz',
    firstName: 'Elena',
    lastName: 'Arniz Cordones',
    address: 'Cádiz',
    phone: '+34 691 17 41 47',
    email: 'elena.arniz.dev@gmail.com',
}

export const texts = {
    es: {
        //General
        constants: constants,
        // Home
        im: constants.name,
        description: 'Descripción',
        designation: 'Desarrolladora Web',
        moreAboutMe: 'Más sobre mí',
        // Home Menu
        home: 'Principal',
        profile: 'Perfil',
        portfolio: 'Portafolio',
        contact: 'Contacto',
        blog: 'Blog',
        // CV
        cv: 'es/ArnizCordonesElena.pdf',
        // About me
        about: 'Sobre',
        me: 'Mí',
        resume: 'Currículum',
        my: 'Mi',
        works: 'proyectos',
        // About Index
        personalInfo: 'Información personal',
        downloadCv: 'Descargar CV',
        mySkills: 'Mis habilidades',
        experience: 'Experiencia',
        and: 'y',
        education: 'educación',
        // About Archievements
        yearsOf: 'años de',
        completed: 'proyectos completados',
        projects: '',
        // About Education
        fpTitle: ' CFGS',
        daw: 'Desarrollo de Aplicaciones Web.',
        degreeTitle: ' Grado',
        artSchool: 'Interpretación textual.',
        travelAg: 'Agencias de viajes y gestión de eventos.',
        // About Experience
        present: 'actualidad',
        july: 'JULIO',
        march: 'MARZO',
        june: 'JUNIO',
        january: 'ENERO',
        october: 'OCTUBRE',
        april: 'ABRIL',
        webDeveloper: 'Desarrolladora web',
        webDeveloperDetails: 'Diseñadora y desarrolladora web en prácticas.',
        instructor: 'Monitora',
        instructorDetails: 'Profesora de diseño web y diseño gráfico a niños con altas capacidades intelectuales.',
        coordinatorPosition: 'Coordinadora de espectáculos',
        coordinatorDetails: 'Técnica de sonido, asistente de coordinación de equipo, montaje y desmontaje del espectáculo.',
        gameMasterPosition: 'Game master/Encargada',
        gameMasterDetails: 'Game master (monitorización de la sala y atención al cliente). Gestión de reservas de forma telefónica, cajas diarias, gestión de trabajadores (Organización de turnos de trabajo), auxiliar de gestión de la facturación y contabilidad de la empresa.',
        // About PersonalInfo
        spanish: 'España',
        firstName: 'Nombre',
        lastName: 'Apellidos',
        nationality: 'Nacionalidad',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        // Portfolio
        all: 'MOSTRAR TODO',
        apps: 'APLICACIONES',
        // Portfolio modal
        project: 'Proyecto',
        client: 'Cliente',
        languages: 'Lenguajes',
        repository: 'Repositorio',
        open: 'Abrir',
        // Portafolio items
        webApp: 'Aplicación Web',
        coinConversion: 'Conversor de monedas',
        // Adress
        mailMe: 'escríbeme',
        callMe: 'llámame',
        // Contact
        contactTitle1: 'ponte en',
        contactTitle2: ' contacto',
        contactSubtitle: 'Contacto',
        contactContentTitle: "¿Crees que puedo ayudarte en algo?",
        contactContentSubtitle: "Estoy abierta a escuchar ideas o futúros proyectos, si crees que podemos trabajar en algo juntos no dudes en ponerte en contacto conmigo.",
        yourName: 'TU NOMBRE',
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El email es obligatorio',
        emailFormat: 'El formato del email no es válido',
        yourEmail: 'TU EMAIL',
        yourSubject: 'TU ASUNTO',
        subjectRequired: 'El asunto es obligatorio',
        yourMessage: 'TU MENSAJE',
        messageRequired: 'El mensaje es obligatorio',
        sendMessage: 'Enviar mensaje',
        emailOk: 'El email ha sido enviado correctamente',
        emailFail: 'El email no se ha podido enviar, vuelva a intentarlo más tarde',
        // Blog
        posts: 'publicaciones',

    },
    en: {
        //General
        constants: constants,
        // Home
        im: `I'm ${constants.name}`,
        description: 'Description',
        designation: 'Web Developer',
        moreAboutMe: 'More about me',
        // Home Menu
        home: 'Home',
        profile: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact',
        blog: 'Blog',
        // CV
        cv: 'en/ArnizCordonesElena.pdf',
        // About me
        about: 'About',
        me: 'Me',
        resume: 'Resume',
        my: 'My',
        works: 'works',
        // About Index
        personalInfo: 'Personal info',
        downloadCv: 'Download CV',
        mySkills: 'My skills',
        experience: 'Experience',
        and: '&',
        education: 'Education',
        // About Archievements
        yearsOf: 'years of',
        completed: 'completed',
        projects: 'projects',
        // About Education
        fpTitle: 'EQF Level 5',
        fpMasterTitle: 'Master EQF Level 5',
        daw: 'Web application development.',
        degreeTitle: ' EQF Level 6',
        artSchool: 'Textual interpretation.',
        travelAg: 'Travel agencies and event management.',
        // About Experience
        present: 'present',
        july: 'JULY',
        march: 'MARCH',
        june: 'JUNE',
        january: 'JANUARY',
        october: 'OCTOBER',
        april: 'APRIL',
        webDeveloper: 'Web Developer',
        webDeveloperDetails: 'Trainee web designer and developer.',
        instructor: 'Instructor',
        instructorDetails: 'Web design and graphic design teacher for children with high intellectual abilities.',
        coordinatorPosition: 'Events coordinator',
        coordinatorDetails: 'Sound technician, equipment coordination assistant, show set-up and dismantling.',
        gameMasterPosition: 'Game master/Responsible',
        gameMasterDetails: 'Game master (room monitoring and customer service). Management of telephone reservations, daily cash registers, management of workers (organization of work shifts), auxiliary management of invoicing and accounting of the company.',
        // About PersonalInfo
        spanish: 'Spanish',
        firstName: 'First name',
        lastName: 'Last name',
        nationality: 'Nationality',
        address: 'address',
        phone: 'phone',
        email: 'email',
        // Portfolio
        all: 'ALL',
        apps: 'APPS',
        // Portfolio modal
        project: 'Project',
        client: 'Client',
        languages: 'Languages',
        repository: 'Repository',
        open: 'Open',
        // Portafolio items
        webApp: 'Web Application',
        coinConversion: 'Coin Conversion',
        // Adress
        mailMe: 'mail me',
        callMe: 'call me',
        // Contact
        contactTitle1: 'get in',
        contactTitle2: ' touch',
        contactSubtitle: 'contact',
        contactContentTitle: "CAN I HELP YOU WITH ANYTHING?",
        contactContentSubtitle: "I am open to listen to ideas or future projects, if you think we can work on something together do not hesitate to contact me.",
        yourName: 'YOUR NAME',
        nameRequired: 'Name is required ',
        emailRequired: 'Email is required ',
        emailFormat: 'Entered value does not match email format ',
        yourEmail: 'YOUR EMAIL',
        yourSubject: 'YOUR SUBJECT',
        subjectRequired: 'Subject is required',
        yourMessage: 'YOUR MESSAGE',
        messageRequired: 'Message is required',
        sendMessage: 'Send Message',
        emailOk: 'The email has been sent successfully',
        emailFail: 'The email could not be sent, please try again later.',
        // Blog
        posts: 'posts',
    },
}

const LangContext = React.createContext(texts.en);

export default LangContext;