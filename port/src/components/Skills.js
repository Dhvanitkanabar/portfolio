import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * =========================================================================
 * SKILLS DATA & CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * =========================================================================
 * Only includes defendable technologies backed by actual verified projects:
 * - FasalRakshak (Crop disease diagnosis, ICETAI 2026 paper, Cloudflare deployment)
 * - Sakshi Clothing (Full-stack e-commerce with payment & admin)
 * - CRM Sentry (Surveillance & camera dashboard)
 * - Hackathon Projects (CERS+, SecureComm)
 */

// Embedded SVGs for guaranteed self-contained reliability & zero dependencies
const SkillIcons = {
    JavaScript: () => (
        <svg viewBox="0 0 24 24" fill="#F7DF1E" className="w-full h-full" aria-hidden="true">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 24 24" fill="#3178C6" className="w-full h-full" aria-hidden="true">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zM11.5 6.5H4v2.5h2.2v9h2.6v-9H11V6.5z" />
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 24 24" fill="#3776AB" className="w-full h-full" aria-hidden="true">
            <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.808v.825H3.85S0 5.797 0 11.92c0 6.126 3.362 5.92 3.362 5.92h2.008v-2.823s-.109-3.362 3.298-3.362h5.66s3.15.053 3.15-3.056V3.056S17.95 0 11.914 0zM8.7 1.71c.547 0 .99.443.99.99 0 .548-.443.99-.99.99a.991.991 0 0 1-.99-.99c0-.547.443-.99.99-.99zm3.385 22.29c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75H11.985v-.825h8.164s3.85.434 3.85-5.69c0-6.124-3.362-5.919-3.362-5.919h-2.008v2.823s.109 3.362-3.298 3.362h-5.66s-3.15-.054-3.15 3.056v5.566s-.472 3.056 5.564 3.056zm3.214-1.71a.991.991 0 0 1-.99-.99c0-.548.443-.99.99-.99.547 0 .99.442.99.99 0 .547-.443.99-.99.99z" />
        </svg>
    ),
    React: () => (
        <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-full h-full" aria-hidden="true">
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
    ),
    ReactNative: () => (
        <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-full h-full" aria-hidden="true">
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
    ),
    Node: () => (
        <svg viewBox="0 0 24 24" fill="#339933" className="w-full h-full" aria-hidden="true">
            <path d="M12 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383-.144-.051-.358-.138-.08-.383C.951 18.04 0 11.23 0 12c0-.77.951 6.04 7.98 9.25.278.245.064.332-.08.383.144.051.358.138.08.383L11.076 23.753c.563.327 1.282.327 1.845 0l2.937-1.737c.278-.245.064-.332-.08-.383.144-.051.358-.138.08-.383 7.029-3.21 7.98-10.02 7.98-10.77 0 .75-.951 7.56-7.98 10.77.278.245.064.332-.08.383-.144.051-.358.138-.08.383l-3.037 1.737c-.281.163-.601.247-.922.247z" />
        </svg>
    ),
    Express: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full dark:text-light text-dark" aria-hidden="true">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c-.013-.394-.013-.788-.13-1.826zm1.12-.228c-.345 3.001 1.9 5.371 4.858 5.301 2.84-.069 4.837-2.08 4.822-5.301H1.122z" />
        </svg>
    ),
    MongoDB: () => (
        <svg viewBox="0 0 24 24" fill="#47A248" className="w-full h-full" aria-hidden="true">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.321-.706-.62-.956-.62-.956s-.34.486-.62.956c-.321.701-3.309 2.535-4.573 8.115-.951 4.205.132 8.411 2.535 11.53.25.324.498.647.747.971.047.06.094.12.14.18H10.1c.36.012.72.012 1.08 0h.82h-.82c.16.2.321.401.482.601h.67l.154-.192C14.868 21.077 18.144 16.85 17.193 9.555z" />
        </svg>
    ),
    Firebase: () => (
        <svg viewBox="0 0 24 24" fill="#FFCA28" className="w-full h-full" aria-hidden="true">
            <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
        </svg>
    ),
    TensorFlow: () => (
        <svg viewBox="0 0 24 24" fill="#FF6F00" className="w-full h-full" aria-hidden="true">
            <path d="M1.292 5.856L11.54 0v24l-4.095-2.38V7.952l-6.153 3.593V5.856zm21.416 0L12.46 0v24l4.095-2.38V7.952l6.153 3.593V5.856z" />
        </svg>
    ),
    Tailwind: () => (
        <svg viewBox="0 0 24 24" fill="#38B2AC" className="w-full h-full" aria-hidden="true">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
    ),
    Cloudflare: () => (
        <svg viewBox="0 0 24 24" fill="#F38020" className="w-full h-full" aria-hidden="true">
            <path d="M18.33 10.17a6.22 6.22 0 0 0-5.88-4.17 6.3 6.3 0 0 0-6.19 5.09A4.75 4.75 0 0 0 .5 15.75C.5 18.37 2.63 20.5 5.25 20.5h13.08a4.67 4.67 0 0 0 4.67-4.67c0-2.43-1.85-4.42-4.67-4.66z" />
        </svg>
    ),
    GitHub: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full dark:text-light text-dark" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    ),
    Postman: () => (
        <svg viewBox="0 0 24 24" fill="#FF6C37" className="w-full h-full" aria-hidden="true">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.427 6.572.843 12.584-3.8 13.427-10.373.843-6.573-3.8-12.585-10.372-13.428zm-.528 3.253l3.504 3.504-2.302 2.302-3.504-3.504zm-7.44 11.19l3.504-3.504 2.302 2.302-3.504 3.504zm11.76-7.44L14.015 10.4l-2.302-2.303 3.303-3.303zm-7.44 7.44l-2.303 2.303-1.4-1.4 2.303-2.302z" />
        </svg>
    ),
    VSCode: () => (
        <svg viewBox="0 0 24 24" fill="#007ACC" className="w-full h-full" aria-hidden="true">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.26a.997.997 0 0 0 .005 1.503l3.655 3.238-3.655 3.238a.997.997 0 0 0-.005 1.503l1.322 1.201c.365.332.91.355 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18 16.54l-6.57-4.54L18 7.46v9.08z" />
        </svg>
    ),
    Docker: () => (
        <svg viewBox="0 0 24 24" fill="#2496ED" className="w-full h-full" aria-hidden="true">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.76 9.89a2.38 2.38 0 00-1.28-1.572 4.19 4.19 0 00-.81-.225 6.012 6.012 0 00-1.077-.105c-.328 0-.655.027-.977.08-.258-.87-1.1-1.396-2.02-1.396-.134 0-.27.01-.403.03a4.016 4.016 0 00-.598-1.637 4.148 4.148 0 00-1.782-1.42 4.168 4.168 0 00-1.714-.363c-.15 0-.3.007-.449.022a.185.185 0 00-.168.184v1.887c0 .103.084.186.186.186h2.119a.185.185 0 00.185-.185V4.65c.42.06.817.234 1.157.507.34.274.597.632.748 1.042a.186.186 0 00.16.124c.73.064 1.34.542 1.543 1.21a.186.186 0 00.154.128c.45.053.86.262 1.168.595.307.332.482.766.495 1.226a.186.186 0 00.14.178c.325.097.618.28.847.53.228.25.368.566.404.912a.186.186 0 00.183.167h.044c.48-.04 1.107-.075 1.706.336.52.357.773.957.653 1.54-.366 1.78-1.895 3.013-3.717 3.013H1.47a.972.972 0 01-.972-.973c0-2.348.932-4.6 2.593-6.26 1.66-1.66 3.91-2.593 6.26-2.593.4 0 .8.026 1.196.08a.186.186 0 00.207-.156l.332-1.63a.186.186 0 00-.154-.22 11.23 11.23 0 00-1.58-.112c-3.05 0-5.975 1.21-8.132 3.368A11.43 11.43 0 000 13.915C0 17.003 2.5 19.5 5.588 19.5h12.594c2.81 0 5.253-1.993 5.795-4.81.165-.858.077-1.748-.254-2.56a4.84 4.84 0 00-1.01-1.498 3.79 3.79 0 001.047-.742z" />
        </svg>
    ),
    PostgreSQL: () => (
        <svg viewBox="0 0 24 24" fill="#4169E1" className="w-full h-full" aria-hidden="true">
            <path d="M11.968 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.968 0zm6.066 15.65c-.244.373-.55.702-.906.974a4.96 4.96 0 0 1-1.373.69c-.52.164-1.066.244-1.616.236-1.043 0-2.053-.298-2.923-.86a6.38 6.38 0 0 1-2.073-2.308 6.784 6.784 0 0 1-.745-3.155c0-1.127.262-2.203.76-3.123a6.29 6.29 0 0 1 2.083-2.264c.884-.537 1.905-.812 2.946-.796.534.004 1.064.095 1.57.27a4.93 4.93 0 0 1 1.344.757c.36.28.666.623.906 1.01.24.39.404.82.483 1.272.08.45.078.913-.004 1.36-.083.45-.246.877-.48 1.26a4.26 4.26 0 0 1-.893 1.042 4.14 4.14 0 0 1-1.245.698 4.02 4.02 0 0 1-1.507.21c-.482-.023-.956-.15-1.385-.373a3.02 3.02 0 0 1-.994-.858 2.94 2.94 0 0 1-.48-1.22c-.08-.433-.047-.88.096-1.298a2.83 2.83 0 0 1 .69-1.11 2.84 2.84 0 0 1 1.137-.665c.44-.136.907-.168 1.363-.095.457.072.888.25 1.257.52.37.27.653.626.826 1.037.172.41.227.86.16 1.306-.067.445-.237.86-.497 1.21-.26.35-.603.623-1 .796-.398.172-.834.237-1.27.188a2.53 2.53 0 0 1-1.176-.525 2.45 2.45 0 0 1-.7-.98 2.42 2.42 0 0 1-.153-1.196c.07-.406.25-.78.52-1.085.27-.306.62-.53 1.013-.65.394-.12.813-.127 1.21-.02.396.107.75.317 1.02.61.27.29.44.66.5 1.05.05.39.006.79-.13 1.15a2.21 2.21 0 0 1-.68.89 2.24 2.24 0 0 1-1.03.44c-.37.06-.75.01-1.09-.14a1.86 1.86 0 0 1-.8-.68 1.84 1.84 0 0 1-.29-.98c.02-.34.14-.66.36-.91.22-.25.51-.42.84-.49.33-.07.67-.03.97.12.3.15.54.39.69.69.15.3.18.64.09.97-.09.33-.29.61-.57.8-.28.19-.62.27-.95.23a1.44 1.44 0 0 1-.8-.49 1.41 1.41 0 0 1-.3-.88c.03-.3.17-.58.4-.78.23-.2.53-.3.84-.28.31.02.6.14.8.36.2.22.28.51.24.81-.04.3-.2.56-.45.72a1.07 1.07 0 0 1-.77.16.99.99 0 0 1-.64-.47.98.98 0 0 1-.13-.76c.07-.25.24-.46.47-.58.23-.12.5-.13.73-.03.23.1.4.29.48.53.08.24.04.5-.1.7-.14.2-.36.31-.6.3-.24 0-.46-.12-.58-.33a.75.75 0 0 1-.03-.66c.09-.2.27-.33.48-.36.21-.03.42.06.54.24.12.18.12.41 0 .6-.12.19-.33.28-.54.24a.5.5 0 0 1-.39-.4.49.49 0 0 1 .15-.46c.17-.12.39-.1.52.05.13.15.11.37-.05.5a.34.34 0 0 1-.41-.02.32.32 0 0 1-.03-.42.27.27 0 0 1 .36-.07.25.25 0 0 1 .09.33.2.2 0 0 1-.26.08.17.17 0 0 1-.1-.21.14.14 0 0 1 .17-.07.11.11 0 0 1 .09.13.08.08 0 0 1-.1.06z" />
        </svg>
    ),
};

export const SKILLS_CONFIG = {
    badge: "Technical Repertoire",
    heading: "Skills & Applied Engineering",
    intro: "Practical software engineering capabilities proven through production web platforms, cross-platform mobile apps, and peer-reviewed applied AI research.",

    // Filter categories (keyboard navigable tabs)
    categories: ["All", "Frontend", "Backend", "Database & Cloud", "AI / ML", "Tools"],

    // Top 5 visually emphasized Core Skills
    coreStackIds: ["react", "nodejs", "express", "mongodb", "reactnative"],

    // Currently learning items (max 3 items for honest continuous growth)
    currentlyLearning: [
        {
            name: "Next.js App Router",
            focus: "Server Components & Server Actions",
            status: "Exploring SSR/SSG architectures",
        },
        {
            name: "Docker",
            focus: "Containerization & Multi-stage builds",
            status: "Creating reproducible microservice environments",
        },
        {
            name: "PostgreSQL",
            focus: "Relational modeling & SQL indexing",
            status: "Deepening relational query optimization",
        },
    ],

    // Complete verified skills list with contextual "used in" tags
    skills: [
        // Languages
        {
            id: "javascript",
            name: "JavaScript (ES6+)",
            category: "Languages",
            filterTab: "Frontend",
            Icon: SkillIcons.JavaScript,
            color: "#F7DF1E",
            usedIn: "Core language for full-stack MERN, mobile, and async logic",
            isCore: false,
        },
        {
            id: "typescript",
            name: "TypeScript",
            category: "Languages",
            filterTab: "Frontend",
            Icon: SkillIcons.TypeScript,
            color: "#3178C6",
            usedIn: "Strict typing for scalable dashboard state in CRM Sentry",
            isCore: false,
        },
        {
            id: "python",
            name: "Python",
            category: "Languages",
            filterTab: "AI / ML",
            Icon: SkillIcons.Python,
            color: "#3776AB",
            usedIn: "Data processing & model evaluation in FasalRakshak research",
            isCore: false,
        },

        // Frontend
        {
            id: "react",
            name: "React.js",
            category: "Frontend",
            filterTab: "Frontend",
            Icon: SkillIcons.React,
            color: "#61DAFB",
            usedIn: "Sakshi Clothing storefront, FasalRakshak web, WarLens",
            isCore: true,
        },
        {
            id: "reactnative",
            name: "React Native",
            category: "Frontend",
            filterTab: "Frontend",
            Icon: SkillIcons.ReactNative,
            color: "#61DAFB",
            usedIn: "FasalRakshak cross-platform offline-first mobile app",
            isCore: true,
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            category: "Frontend",
            filterTab: "Frontend",
            Icon: SkillIcons.Tailwind,
            color: "#38B2AC",
            usedIn: "Responsive styling for Sakshi Clothing, CERS+, & portfolio",
            isCore: false,
        },

        // Backend
        {
            id: "nodejs",
            name: "Node.js",
            category: "Backend",
            filterTab: "Backend",
            Icon: SkillIcons.Node,
            color: "#339933",
            usedIn: "REST service runtimes for Sakshi Clothing & WarLens",
            isCore: true,
        },
        {
            id: "express",
            name: "Express.js",
            category: "Backend",
            filterTab: "Backend",
            Icon: SkillIcons.Express,
            color: "#828282",
            usedIn: "RESTful API architecture, routing, middleware & auth",
            isCore: true,
        },
        {
            id: "jwtauth",
            name: "JWT & Security Auth",
            category: "Backend",
            filterTab: "Backend",
            Icon: SkillIcons.Express,
            color: "#6e5494",
            usedIn: "Token auth & password hashing in Sakshi Clothing & SecureComm",
            isCore: false,
        },

        // Database & Cloud
        {
            id: "mongodb",
            name: "MongoDB & Mongoose",
            category: "Database & Cloud",
            filterTab: "Database & Cloud",
            Icon: SkillIcons.MongoDB,
            color: "#47A248",
            usedIn: "Product schemas in Sakshi Clothing, analysis data in WarLens",
            isCore: true,
        },
        {
            id: "firebase",
            name: "Firebase Firestore",
            category: "Database & Cloud",
            filterTab: "Database & Cloud",
            Icon: SkillIcons.Firebase,
            color: "#FFCA28",
            usedIn: "Real-time location & dispatch sync in CERS+ emergency system",
            isCore: false,
        },
        {
            id: "cloudflare",
            name: "Cloudflare Pages",
            category: "Database & Cloud",
            filterTab: "Database & Cloud",
            Icon: SkillIcons.Cloudflare,
            color: "#F38020",
            usedIn: "Production CI/CD deployment & CDN hosting for FasalRakshak",
            isCore: false,
        },

        // AI / ML
        {
            id: "tensorflow",
            name: "TensorFlow.js",
            category: "AI / ML",
            filterTab: "AI / ML",
            Icon: SkillIcons.TensorFlow,
            color: "#FF6F00",
            usedIn: "Client-side offline leaf disease inference in FasalRakshak",
            isCore: false,
        },
        {
            id: "mobilenet",
            name: "MobileNet Vision",
            category: "AI / ML",
            filterTab: "AI / ML",
            Icon: SkillIcons.TensorFlow,
            color: "#FF6F00",
            usedIn: "Lightweight computer vision model architecture (ICETAI 2026 paper)",
            isCore: false,
        },
        {
            id: "gemini",
            name: "Gemini API",
            category: "AI / ML",
            filterTab: "AI / ML",
            Icon: SkillIcons.Cloudflare,
            color: "#4285F4",
            usedIn: "Multilingual advisory in FasalRakshak & triage in CERS+",
            isCore: false,
        },

        // Tools & Workflow
        {
            id: "git",
            name: "Git & GitHub",
            category: "Tools & Workflow",
            filterTab: "Tools",
            Icon: SkillIcons.GitHub,
            color: "#6e5494",
            usedIn: "Version control, branching, PRs, and GitHub deployment flows",
            isCore: false,
        },
        {
            id: "postman",
            name: "Postman",
            category: "Tools & Workflow",
            filterTab: "Tools",
            Icon: SkillIcons.Postman,
            color: "#FF6C37",
            usedIn: "REST API testing, endpoint debugging & published documentation",
            isCore: false,
        },
        {
            id: "vscode",
            name: "VS Code",
            category: "Tools & Workflow",
            filterTab: "Tools",
            Icon: SkillIcons.VSCode,
            color: "#007ACC",
            usedIn: "Primary engineering environment, debugging & ESLint setup",
            isCore: false,
        },
        {
            id: "expo",
            name: "Expo & Android CLI",
            category: "Tools & Workflow",
            filterTab: "Tools",
            Icon: SkillIcons.ReactNative,
            color: "#61DAFB",
            usedIn: "Mobile app emulation, camera testing & APK release builds",
            isCore: false,
        },
    ],
};

const InteractiveSkillCard = ({ skill, index, isSelectedOnMobile, onToggleSelect }) => {
    const cardRef = React.useRef(null);
    const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
    const [spotlight, setSpotlight] = React.useState({ x: 0, y: 0, opacity: 0 });
    const [isTouch, setIsTouch] = React.useState(false);

    React.useEffect(() => {
        setIsTouch(
            window.matchMedia("(pointer: coarse)").matches ||
            navigator.maxTouchPoints > 0
        );
    }, []);

    const handleMouseMove = (e) => {
        if (isTouch || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Max 8 degrees tilt (clamped to [-8, 8])
        const rotX = Math.max(-8, Math.min(8, ((rect.height / 2 - y) / (rect.height / 2)) * 8));
        const rotY = Math.max(-8, Math.min(8, ((x - rect.width / 2) / (rect.width / 2)) * 8));

        setRotate({ x: rotX, y: rotY });
        setSpotlight({ x, y, opacity: 1 });
    };

    const handleMouseLeave = () => {
        if (isTouch) return;
        setRotate({ x: 0, y: 0 });
        setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    };

    const IconComponent = skill.Icon;

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
            onClick={onToggleSelect}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 800,
                transform: isTouch ? "none" : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
            }}
            className="relative flex flex-col justify-between p-4 sm:p-3.5 rounded-2xl cursor-pointer group
            border border-dark/10 dark:border-light/10 bg-light/60 dark:bg-dark/60 backdrop-blur-sm
            hover:border-primary/50 dark:hover:border-primaryDark/50 hover:shadow-xl transition-colors duration-300 overflow-hidden"
        >
            {/* Soft cursor-tracking spotlight */}
            {!isTouch && (
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 -z-10"
                    style={{
                        opacity: spotlight.opacity,
                        background: `radial-gradient(220px circle at ${spotlight.x}px ${spotlight.y}px, rgba(6, 182, 212, 0.16), transparent 75%)`,
                    }}
                    aria-hidden="true"
                />
            )}

            {/* Skill Header */}
            <div className="flex items-center gap-3 mb-2.5">
                <div
                    className="w-9 h-9 p-2 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}18` }}
                >
                    <IconComponent />
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm text-dark dark:text-light truncate">
                        {skill.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark/70 dark:text-light/70">
                        {skill.category}
                    </span>
                </div>
            </div>

            {/* One-Line "Used In" Proven Context */}
            <div className="w-full pt-2 border-t border-dark/5 dark:border-light/5 text-left">
                <p className="text-xs font-medium text-dark/70 dark:text-light/70 leading-snug">
                    <span className="text-primary dark:text-primaryDark font-bold">Proof: </span>
                    {skill.usedIn}
                </p>
            </div>

            {/* Bottom Accent line */}
            <div
                className="absolute bottom-0 left-4 right-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ backgroundColor: skill.color }}
            />
        </motion.div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedSkillId, setSelectedSkillId] = useState(null);
    const prefersReducedMotion = useReducedMotion();

    const transitionConfig = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

    // Filter skills based on selected tab
    const filteredSkills = useMemo(() => {
        if (activeTab === "All") return SKILLS_CONFIG.skills;
        return SKILLS_CONFIG.skills.filter(
            (skill) => skill.filterTab === activeTab || skill.category === activeTab
        );
    }, [activeTab]);

    // Core stack skills for the top banner
    const coreSkills = useMemo(() => {
        return SKILLS_CONFIG.skills.filter((skill) => skill.isCore);
    }, []);

    return (
        <section
            id="skills"
            className="w-full py-24 sm:py-16 xs:py-12 relative overflow-hidden"
            aria-labelledby="skills-heading"
        >
            {/* Ambient background glows */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] rounded-full opacity-[0.04] pointer-events-none -z-10 bg-primary dark:bg-primaryDark blur-[120px]" />
            <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[300px] rounded-full opacity-[0.03] pointer-events-none -z-10 bg-[#B63E96] blur-[110px]" />

            <div className="w-full max-w-7xl mx-auto px-12 xl:px-8 sm:px-6 xs:px-4">
                
                {/* 1. SECTION HEADER */}
                <div className="text-center mb-16 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={transitionConfig}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-primaryDark/10 border border-primary/20 dark:border-primaryDark/20 mb-3"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primaryDark">
                            {SKILLS_CONFIG.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        id="skills-heading"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...transitionConfig, delay: 0.1 }}
                        className="font-black text-6xl xl:text-5xl md:text-4xl sm:text-3xl tracking-tight text-dark dark:text-light mb-4"
                    >
                        {SKILLS_CONFIG.heading}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...transitionConfig, delay: 0.15 }}
                        className="text-lg md:text-base sm:text-sm font-medium text-dark/70 dark:text-light/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        {SKILLS_CONFIG.intro}
                    </motion.p>
                </div>

                {/* 2. CORE STACK HIGHLIGHT ROW (MERN + React Native) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={transitionConfig}
                    className="mb-14 sm:mb-10 p-6 sm:p-5 rounded-3xl bg-gradient-to-br from-primary/[0.07] via-light/40 to-primaryDark/[0.07] dark:from-primaryDark/[0.08] dark:via-dark/60 dark:to-primary/[0.04] border-2 border-primary/30 dark:border-primaryDark/30 shadow-xl backdrop-blur-md"
                >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-dark/10 dark:border-light/10 pb-3.5">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-primary dark:bg-primaryDark animate-pulse" />
                            <h3 className="text-sm font-extrabold uppercase tracking-widest text-primary dark:text-primaryDark">
                                Core Production Stack
                            </h3>
                        </div>
                        <span className="text-xs font-semibold text-dark/70 dark:text-light/70">
                            Primary specialization: MERN + React Native
                        </span>
                    </div>

                    <div className="grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                        {coreSkills.map((skill) => {
                            const IconComponent = skill.Icon;
                            return (
                                <div
                                    key={skill.id}
                                    className="p-4 rounded-2xl bg-light/80 dark:bg-dark/80 border border-primary/20 dark:border-primaryDark/20 shadow-sm flex flex-col justify-between group hover:border-primary dark:hover:border-primaryDark transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2.5">
                                        <div className="w-8 h-8 flex-shrink-0 p-1.5 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/5 dark:border-light/5">
                                            <IconComponent />
                                        </div>
                                        <span className="font-extrabold text-sm text-dark dark:text-light">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <p className="text-[11px] font-medium text-dark/70 dark:text-light/70 leading-relaxed border-t border-dark/5 dark:border-light/5 pt-2">
                                        <strong className="text-primary dark:text-primaryDark font-bold">Used in: </strong>
                                        {skill.usedIn}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 3. FILTER / TAB BAR */}
                <div className="flex items-center justify-center mb-10 sm:mb-8">
                    <div
                        role="tablist"
                        aria-label="Filter skills by technology domain"
                        className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 shadow-inner"
                    >
                        {SKILLS_CONFIG.categories.map((cat) => {
                            const isSelected = activeTab === cat;
                            return (
                                <button
                                    key={cat}
                                    role="tab"
                                    aria-selected={isSelected}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-4 py-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                                        isSelected
                                            ? "bg-dark text-light dark:bg-light dark:text-dark shadow-md scale-105"
                                            : "text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light hover:bg-dark/5 dark:hover:bg-light/5"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 4. SKILLS GRID WITH REVEALABLE "USED IN" CONTEXT & 3D PERSPECTIVE TILT */}
                <motion.div
                    layout
                    className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <InteractiveSkillCard
                                key={skill.id}
                                skill={skill}
                                index={index}
                                isSelectedOnMobile={selectedSkillId === skill.id}
                                onToggleSelect={() =>
                                    setSelectedSkillId(selectedSkillId === skill.id ? null : skill.id)
                                }
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 5. "CURRENTLY LEARNING" ROW (Continuous growth without overclaiming) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={transitionConfig}
                    className="p-6 sm:p-5 rounded-3xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 backdrop-blur-sm"
                >
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-base" aria-hidden="true">🌱</span>
                            <h3 className="text-xs font-black uppercase tracking-widest text-dark/80 dark:text-light/80">
                                Currently Deepening (Active Learning)
                            </h3>
                        </div>
                        <span className="text-[11px] font-medium text-dark/70 dark:text-light/70">
                            Transparent skill growth without buzzwords
                        </span>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                        {SKILLS_CONFIG.currentlyLearning.map((item) => (
                            <div
                                key={item.name}
                                className="p-4 rounded-2xl bg-light/70 dark:bg-dark/70 border border-dark/5 dark:border-light/5 flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="font-extrabold text-sm text-dark dark:text-light">
                                        {item.name}
                                    </span>
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:text-primaryDark">
                                        In Progress
                                    </span>
                                </div>
                                <span className="text-xs font-semibold text-primary dark:text-primaryDark mb-1">
                                    {item.focus}
                                </span>
                                <p className="text-[11px] font-medium text-dark/60 dark:text-light/60 leading-relaxed">
                                    {item.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
