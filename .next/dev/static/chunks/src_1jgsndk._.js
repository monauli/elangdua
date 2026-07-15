(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigation",
    ()=>navigation
]);
const navigation = [
    {
        label: "Tentang",
        href: "#tentang"
    },
    {
        label: "Produk",
        href: "#produk"
    },
    {
        label: "Sejarah",
        href: "#sejarah"
    },
    {
        label: "Lokasi",
        href: "#lokasi"
    },
    {
        label: "Kontak",
        href: "#kontak"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "company",
    ()=>company,
    "distribution",
    ()=>distribution
]);
const company = {
    name: "Elang Dua",
    founded: "1965",
    city: "Singkawang, Kalimantan Barat",
    address: "TODO: Ganti dengan alamat resmi Elang Dua.",
    whatsapp: "",
    email: "",
    instagram: "",
    facebook: "",
    mapsUrl: "",
    hours: "TODO: Ganti dengan jam operasional resmi.",
    shortDescription: "Rasa pilihan yang menemani dapur Indonesia sejak 1965.",
    description: "Elang Dua tumbuh dari semangat menghadirkan produk bumbu yang konsisten, dekat dengan keluarga, dan relevan bagi usaha kuliner. Profil lengkap perusahaan akan diperbarui setelah data resmi tersedia."
};
const distribution = [
    "Kalimantan Barat",
    "Kota Singkawang",
    "TODO: Tambahkan wilayah distribusi resmi"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/company.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const on = {
                "Navbar.useEffect.on": ()=>{
                    setScrolled(scrollY > 24);
                    setProgress(scrollY / (document.documentElement.scrollHeight - innerHeight) * 100);
                }
            }["Navbar.useEffect.on"];
            addEventListener('scroll', on, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>removeEventListener('scroll', on)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed z-50 w-full px-4 pt-4 md:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: `${progress}%`
                },
                className: "fixed left-0 top-0 z-50 h-[2px] bg-[#d2a84a]"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 11,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `mx-auto flex max-w-[1280px] items-center justify-between rounded-full border px-5 py-3 text-white transition-all duration-500 ${scrolled ? 'border-white/15 bg-[#4e0e0e]/85 shadow-2xl backdrop-blur-xl' : 'border-white/10 bg-transparent'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#beranda",
                        "aria-label": "Elang Dua, beranda",
                        className: "relative block h-[32px] w-[112px] shrink-0 md:h-[40px] md:w-[132px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/logo/elang-dua-logo.png",
                            alt: "Elang Dua",
                            fill: true,
                            sizes: "(max-width: 768px) 112px, 132px",
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 543
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 11,
                        columnNumber: 412
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-7 text-sm text-white/75 lg:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: n.href,
                                className: "transition hover:text-[#d2a84a]",
                                children: n.label
                            }, n.href, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 11,
                                columnNumber: 782
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 11,
                        columnNumber: 690
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsapp ? 'https://wa.me/' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsapp : '#kontak',
                        className: "hidden items-center gap-2 rounded-full bg-[#d2a84a] px-4 py-2 text-sm font-bold text-[#4e0e0e] lg:flex",
                        children: [
                            "WhatsApp ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 11,
                                columnNumber: 1072
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 11,
                        columnNumber: 877
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Buka menu",
                        onClick: ()=>setOpen(!open),
                        className: "lg:hidden",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 1189
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 1194
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 11,
                        columnNumber: 1101
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 11,
                columnNumber: 160
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-2 mt-2 rounded-3xl bg-[#4e0e0e] p-5 text-white lg:hidden",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>setOpen(false),
                            href: n.href,
                            className: "block border-b border-white/10 py-4",
                            children: n.label
                        }, n.href, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 11,
                            columnNumber: 1320
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#kontak",
                        onClick: ()=>setOpen(false),
                        className: "mt-4 block rounded-full bg-[#d2a84a] px-4 py-3 text-center font-bold text-[#4e0e0e]",
                        children: "Hubungi Kami"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 11,
                        columnNumber: 1442
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 11,
                columnNumber: 1224
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(Navbar, "xO+6dh0Xa8qaQObW9kwxErbXA9U=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function Reveal({ children, className = '', delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 28,
            filter: 'blur(6px)'
        },
        whileInView: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
        },
        viewport: {
            once: true,
            margin: '-80px'
        },
        transition: {
            duration: .7,
            delay,
            ease: [
                .22,
                1,
                .36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 1,
        columnNumber: 175
    }, this);
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Bottle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bottle",
    ()=>Bottle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Bottle() {
    _s();
    const rx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0), ry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rx, {
        stiffness: 60,
        damping: 18
    }), sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(ry, {
        stiffness: 60,
        damping: 18
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseMove: (e)=>{
            const r = e.currentTarget.getBoundingClientRect();
            ry.set((e.clientX - r.left / r.width - r.width / 2) / 18);
            rx.set(-(e.clientY - r.top - r.height / 2) / 22);
        },
        onMouseLeave: ()=>{
            rx.set(0);
            ry.set(0);
        },
        style: {
            rotateX: sx,
            rotateY: sy
        },
        className: "relative h-[380px] w-[190px] transform-3d md:h-[500px] md:w-[250px]",
        animate: {
            y: [
                0,
                -10,
                0
            ],
            rotateZ: [
                -2,
                2,
                -2
            ]
        },
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bottle-shadow absolute -bottom-5 left-[5%] h-8 w-[90%] rounded-full bg-black/40 blur-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/Bottle.tsx",
                lineNumber: 2,
                columnNumber: 595
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[35%] top-0 h-14 w-[30%] rounded-t-lg border border-[#f4d98e]/60 bg-gradient-to-r from-[#725019] via-[#efd27a] to-[#6a4714] shadow-[inset_2px_0_8px_rgba(255,255,255,.5)]"
            }, void 0, false, {
                fileName: "[project]/src/components/Bottle.tsx",
                lineNumber: 2,
                columnNumber: 701
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[28%] top-10 h-9 w-[44%] rounded bg-gradient-to-r from-[#3d0808] via-[#b8863a] to-[#3d0808]"
            }, void 0, false, {
                fileName: "[project]/src/components/Bottle.tsx",
                lineNumber: 2,
                columnNumber: 903
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bottle-glass product-glow absolute inset-x-0 top-14 h-[82%] rounded-[32px_32px_48px_48px] bg-gradient-to-br from-[#c44432] via-[#741313] to-[#200505] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-white/25 before:via-transparent before:to-transparent before:content-['']",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-[11%] top-[25%] h-[47%] w-[78%] rounded-sm border border-[#d2a84a]/50 bg-gradient-to-b from-[#fffaf0] to-[#e5d6b8] p-4 text-center shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold tracking-[.3em] text-[#8f1d1d]",
                            children: "ELANG DUA"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Bottle.tsx",
                            lineNumber: 2,
                            columnNumber: 1532
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-3xl font-serif text-[#4e0e0e]",
                            children: [
                                "Kecap",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/Bottle.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1681
                                }, this),
                                "Manis"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Bottle.tsx",
                            lineNumber: 2,
                            columnNumber: 1619
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-3 h-px w-12 bg-[#d2a84a]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Bottle.tsx",
                            lineNumber: 2,
                            columnNumber: 1697
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-[9px] uppercase tracking-widest text-[#6b6b6b]",
                            children: "Cita rasa pilihan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Bottle.tsx",
                            lineNumber: 2,
                            columnNumber: 1751
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Bottle.tsx",
                    lineNumber: 2,
                    columnNumber: 1360
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Bottle.tsx",
                lineNumber: 2,
                columnNumber: 1027
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Bottle.tsx",
        lineNumber: 2,
        columnNumber: 173
    }, this);
}
_s(Bottle, "9dNML6TwsbbiqV/kqQshgw/b6Lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Bottle;
var _c;
__turbopack_context__.k.register(_c, "Bottle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PouringEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PouringEffect",
    ()=>PouringEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PouringEffect() {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (reduced) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": "true",
        className: "pouring-effect absolute left-[54%] top-[47%] z-20 h-64 w-40 md:left-[56%] md:top-[45%] md:h-72 md:w-48",
        animate: {
            rotate: [
                0,
                0,
                14,
                14,
                0,
                0
            ],
            y: [
                0,
                0,
                3,
                3,
                0,
                0
            ]
        },
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: [
                .4,
                0,
                .2,
                1
            ],
            times: [
                0,
                .25,
                .38,
                .62,
                .78,
                1
            ]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-[38%] top-[33%] h-24 w-[7px] origin-top rounded-full bg-gradient-to-r from-[#220505] via-[#6d1710] to-[#d8ad55] shadow-[0_0_12px_rgba(216,173,85,.55)]",
                initial: {
                    scaleY: 0,
                    opacity: 0
                },
                animate: {
                    scaleY: [
                        0,
                        0,
                        1,
                        1,
                        0,
                        0
                    ],
                    opacity: [
                        0,
                        0,
                        1,
                        1,
                        0,
                        0
                    ]
                },
                transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [
                        0,
                        .25,
                        .38,
                        .62,
                        .78,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PouringEffect.tsx",
                lineNumber: 4,
                columnNumber: 380
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-[29%] top-[88%] h-4 w-16 rounded-[50%] bg-[#32100c] shadow-[0_3px_12px_rgba(0,0,0,.28)]",
                animate: {
                    scale: [
                        .8,
                        .8,
                        1,
                        1,
                        .8,
                        .8
                    ],
                    opacity: [
                        .35,
                        .35,
                        1,
                        1,
                        .35,
                        .35
                    ]
                },
                transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [
                        0,
                        .25,
                        .38,
                        .62,
                        .78,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PouringEffect.tsx",
                lineNumber: 4,
                columnNumber: 743
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[42%] top-[37%] h-12 w-px bg-white/50 blur-[1px]"
            }, void 0, false, {
                fileName: "[project]/src/components/PouringEffect.tsx",
                lineNumber: 4,
                columnNumber: 1023
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PouringEffect.tsx",
        lineNumber: 4,
        columnNumber: 96
    }, this);
}
_s(PouringEffect, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = PouringEffect;
var _c;
__turbopack_context__.k.register(_c, "PouringEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        name: "Kecap Manis",
        description: "Rasa manis gurih untuk berbagai hidangan favorit.",
        variant: "TODO: Tambahkan ukuran resmi.",
        tone: "dark"
    },
    {
        name: "Kecap Asin",
        description: "Sentuhan gurih yang memperkaya masakan sehari-hari.",
        variant: "TODO: Tambahkan ukuran resmi.",
        tone: "amber"
    },
    {
        name: "Cuka Makan",
        description: "Pelengkap bercita rasa segar untuk sajian keluarga.",
        variant: "TODO: Tambahkan ukuran resmi.",
        tone: "light"
    },
    {
        name: "Varian Ekonomis",
        description: "Pilihan praktis untuk rumah tangga dan usaha kuliner.",
        variant: "TODO: Tambahkan ukuran resmi.",
        tone: "red"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeline",
    ()=>timeline
]);
const timeline = [
    {
        year: "1965",
        title: "Awal perjalanan",
        text: "Perusahaan mulai berdiri dan membangun kepercayaan dari dapur ke dapur."
    },
    {
        year: "—",
        title: "Fase pertumbuhan produksi",
        text: "TODO: Lengkapi dengan milestone resmi perusahaan."
    },
    {
        year: "—",
        title: "Perluasan variasi produk",
        text: "TODO: Lengkapi dengan milestone resmi perusahaan."
    },
    {
        year: "—",
        title: "Perluasan distribusi",
        text: "TODO: Lengkapi dengan milestone resmi perusahaan."
    },
    {
        year: "Kini",
        title: "Era modernisasi merek",
        text: "Melangkah bersama kebutuhan konsumen dan mitra kuliner masa kini."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About,
    "Advantages",
    ()=>Advantages,
    "Contact",
    ()=>Contact,
    "Distribution",
    ()=>Distribution,
    "Footer",
    ()=>Footer,
    "Hero",
    ()=>Hero,
    "History",
    ()=>History,
    "Location",
    ()=>Location,
    "Products",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bottle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Bottle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PouringEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PouringEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/timeline.ts [app-client] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
;
;
;
const ProductScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/three/ProductScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/three/ProductScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 grid place-items-center text-xs uppercase tracking-[.25em] text-[#d8ad55]/60",
            children: "Memuat produk"
        }, void 0, false, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 2,
            columnNumber: 87
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ProductScene;
const Button = ({ children, href = '#produk', secondary = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-1 ${secondary ? 'border border-white/30 text-white hover:border-[#d2a84a] hover:text-[#d2a84a]' : 'bg-[#d2a84a] text-[#4e0e0e] hover:bg-white'}`,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 3,
                columnNumber: 408
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 3,
        columnNumber: 118
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Button;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "beranda",
        className: "hero-contrast noise relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#f5ebdd] via-[#f5ebdd] to-[#851b1b] px-5 pb-20 pt-36 text-[#1c1210] md:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-glow absolute -right-32 top-20 h-[560px] w-[560px] rounded-full bg-[#851b1b] opacity-70 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 4,
                columnNumber: 224
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[1.05fr_.95fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-copy relative z-10 max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-in mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-[#851b1b]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px w-10 bg-[#d8ad55]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 608
                                    }, this),
                                    "Sejak 1965"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 496
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-in hero-delay-1 max-w-3xl text-5xl leading-[.98] md:text-7xl",
                                children: [
                                    "Cita rasa ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "text-[#d8ad55]",
                                        children: "legendaris"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 756
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 802
                                    }, this),
                                    "dari Singkawang."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 664
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-in hero-delay-2 mt-7 max-w-lg text-base leading-7 text-[#3f2a24] md:text-lg",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].shortDescription,
                                    " Produk bumbu pilihan untuk hidangan keluarga dan usaha kuliner."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 828
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-in hero-delay-3 mt-9 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        children: "Lihat Produk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1082
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        href: "#kontak",
                                        secondary: true,
                                        children: "Hubungi Kami"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1111
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 1018
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 4,
                        columnNumber: 445
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-product relative flex min-h-[440px] items-center justify-center rounded-[48px] bg-gradient-to-br from-[#851b1b]/70 to-[#4a0b0b]/95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit absolute h-64 w-64 rounded-full border border-[#d8ad55]/50 md:h-96 md:w-96"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 1330
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute h-44 w-44 rounded-full bg-[#d8ad55]/20 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 1429
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hero-bottle absolute inset-0",
                                animate: {
                                    rotateZ: [
                                        0,
                                        0,
                                        14,
                                        14,
                                        0,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: [
                                        .4,
                                        0,
                                        .2,
                                        1
                                    ],
                                    times: [
                                        0,
                                        .25,
                                        .38,
                                        .62,
                                        .78,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductScene, {}, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1680
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-25",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bottle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bottle"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1740
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1695
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PouringEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PouringEffect"], {}, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1755
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 1504
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-4 right-5 max-w-[150px] text-right text-[10px] uppercase tracking-[.2em] text-white/60",
                                children: [
                                    "Produk 3D",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1914
                                    }, this),
                                    "mudah diganti"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 4,
                                columnNumber: 1784
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 4,
                        columnNumber: 1177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 4,
                columnNumber: 344
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-5 text-[10px] uppercase tracking-[.3em] text-[#851b1b]/60 md:left-12",
                children: "Rasa yang tinggal di ingatan"
            }, void 0, false, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 4,
                columnNumber: 1951
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 4,
        columnNumber: 31
    }, this);
}
_c2 = Hero;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tentang",
        className: "px-5 py-24 md:px-12 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#8f1d1d]",
                            children: "01 Ã¢â‚¬â€ Tentang Elang Dua"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 5,
                            columnNumber: 186
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 text-5xl leading-tight md:text-6xl",
                            children: [
                                "Dibuat dengan niat baik, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "text-[#8f1d1d]",
                                    children: "dinikmati"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 5,
                                    columnNumber: 375
                                }, this),
                                " sepenuh hati."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 5,
                            columnNumber: 294
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-7 max-w-xl leading-8 text-[#6b6b6b]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].description
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 5,
                            columnNumber: 439
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 5,
                    columnNumber: 178
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: .1,
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[32px] bg-[#8f1d1d] p-8 text-white md:p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[8rem] font-serif leading-none text-[#d2a84a]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].founded
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 5,
                                columnNumber: 635
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-xs text-lg",
                                children: "Tahun perjalanan menemani cita rasa Indonesia."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 5,
                                columnNumber: 734
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex items-center gap-3 text-sm text-white/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 18,
                                        className: "text-[#d2a84a]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 5,
                                        columnNumber: 885
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].city
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 5,
                                columnNumber: 816
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 5,
                        columnNumber: 567
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 5,
                    columnNumber: 527
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 5,
            columnNumber: 95
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 5,
        columnNumber: 32
    }, this);
}
_c3 = About;
function Products() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "produk",
        className: "bg-white px-5 py-24 md:px-12 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1280px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#8f1d1d]",
                            children: "02 Ã¢â‚¬â€ Produk unggulan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 6,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap items-end justify-between gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl",
                                    children: [
                                        "Untuk setiap ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "text-[#8f1d1d]",
                                            children: "momen."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections.tsx",
                                            lineNumber: 6,
                                            columnNumber: 379
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 6,
                                    columnNumber: 329
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-xs text-sm leading-6 text-[#6b6b6b]",
                                    children: "Pilihan rasa untuk kebutuhan dapur sehari-hari."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 6,
                                    columnNumber: 426
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 6,
                            columnNumber: 260
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 6,
                    columnNumber: 146
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .06,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                whileHover: {
                                    y: -6
                                },
                                className: "group overflow-hidden rounded-3xl border border-[#171717]/10 bg-[#f6f0e4] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative flex h-60 items-center justify-center overflow-hidden rounded-2xl ${p.tone === 'light' ? 'bg-[#e9dfcc]' : p.tone === 'amber' ? 'bg-[#a66b21]' : p.tone === 'red' ? 'bg-[#8f1d1d]' : 'bg-[#4e0e0e]'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "scale-[.45] transition duration-500 group-hover:scale-[.5]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Bottle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bottle"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/sections.tsx",
                                                    lineNumber: 6,
                                                    columnNumber: 1077
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections.tsx",
                                                lineNumber: 6,
                                                columnNumber: 1001
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white",
                                                children: "Produk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections.tsx",
                                                lineNumber: 6,
                                                columnNumber: 1092
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 6,
                                        columnNumber: 795
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-5 text-2xl",
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 6,
                                        columnNumber: 1235
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 min-h-12 text-sm leading-6 text-[#6b6b6b]",
                                        children: p.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 6,
                                        columnNumber: 1278
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-xs text-[#8f1d1d]",
                                        children: p.variant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 6,
                                        columnNumber: 1359
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 6,
                                columnNumber: 669
                            }, this)
                        }, p.name, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 6,
                            columnNumber: 634
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 6,
                    columnNumber: 549
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 6,
            columnNumber: 106
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 6,
        columnNumber: 35
    }, this);
}
_c4 = Products;
function Advantages() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#171717] px-5 py-24 text-white md:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1280px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#d2a84a]",
                            children: "03 Ã¢â‚¬â€ Mengapa Elang Dua"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 7,
                            columnNumber: 150
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 max-w-2xl text-5xl md:text-6xl",
                            children: [
                                "Rasa yang ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "text-[#d2a84a]",
                                    children: "konsisten"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 7,
                                    columnNumber: 320
                                }, this),
                                ", cerita yang terus tumbuh."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 7,
                            columnNumber: 258
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 7,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2 lg:grid-cols-5",
                    children: [
                        'Rasa konsisten',
                        'Pengalaman sejak 1965',
                        'Standar kualitas',
                        'Untuk rumah & usaha',
                        'Distribusi berkembang'
                    ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/15 pb-8 lg:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#d2a84a]",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 7,
                                        columnNumber: 711
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "my-8 text-[#d2a84a]",
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 7,
                                        columnNumber: 757
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl",
                                        children: x
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 7,
                                        columnNumber: 807
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 7,
                                columnNumber: 650
                            }, this)
                        }, x, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 7,
                            columnNumber: 620
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 7,
                    columnNumber: 406
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 7,
            columnNumber: 102
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 7,
        columnNumber: 37
    }, this);
}
_c5 = Advantages;
function History() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sejarah",
        className: "px-5 py-24 md:px-12 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1280px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#8f1d1d]",
                            children: "04 Ã¢â‚¬â€ Sejarah"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 8,
                            columnNumber: 145
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 text-5xl md:text-6xl",
                            children: [
                                "Satu perjalanan,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 301
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "text-[#8f1d1d]",
                                    children: "banyak cerita."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 306
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 8,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 8,
                    columnNumber: 137
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 border-l-2 border-[#d2a84a] pl-7 md:ml-20 md:pl-12",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .08,
                            className: "relative mb-12 last:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -left-[38px] top-1 h-4 w-4 rounded-full border-4 border-[#f6f0e4] bg-[#8f1d1d] md:-left-[59px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 538
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-[#8f1d1d]",
                                    children: t.year
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 661
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 text-2xl",
                                    children: t.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 721
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-xl leading-7 text-[#6b6b6b]",
                                    children: t.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 8,
                                    columnNumber: 765
                                }, this)
                            ]
                        }, t.title, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 8,
                            columnNumber: 465
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 8,
                    columnNumber: 370
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 8,
            columnNumber: 97
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 8,
        columnNumber: 34
    }, this);
}
_c6 = History;
function Distribution() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#d2a84a] px-5 py-24 md:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#4e0e0e]",
                            children: "05 Ã¢â‚¬â€ Area distribusi"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 9,
                            columnNumber: 184
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 text-5xl text-[#4e0e0e] md:text-6xl",
                            children: [
                                "Dari Singkawang,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 9,
                                    columnNumber: 363
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "melangkah lebih jauh."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 9,
                                    columnNumber: 368
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 9,
                            columnNumber: 290
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-lg leading-7 text-[#4e0e0e]/75",
                            children: "Kami terus bertumbuh bersama konsumen dan mitra di berbagai wilayah. Ingin menjadi bagian dari perjalanan ini?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 9,
                            columnNumber: 403
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            href: "#kontak",
                            children: "Menjadi distributor"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 9,
                            columnNumber: 574
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 9,
                    columnNumber: 176
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "rounded-[32px] bg-[#4e0e0e] p-8 text-white md:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-widest text-[#d2a84a]",
                            children: "Jangkauan kami"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 9,
                            columnNumber: 705
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distribution"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-white/15 py-5 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 9,
                                        columnNumber: 909
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#d2a84a]",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 9,
                                        columnNumber: 925
                                    }, this)
                                ]
                            }, d, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 9,
                                columnNumber: 812
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 9,
                    columnNumber: 634
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 9,
            columnNumber: 93
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 9,
        columnNumber: 39
    }, this);
}
_c7 = Distribution;
function Location() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lokasi",
        className: "px-5 py-24 md:px-12 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#8f1d1d]",
                            children: "06 Ã¢â‚¬â€ Lokasi"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 10,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 text-5xl md:text-6xl",
                            children: [
                                "Mari ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "text-[#8f1d1d]",
                                    children: "berkunjung."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 10,
                                    columnNumber: 327
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 10,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 space-y-6 text-[#6b6b6b]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "shrink-0 text-[#8f1d1d]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections.tsx",
                                            lineNumber: 10,
                                            columnNumber: 453
                                        }, this),
                                        " ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 10,
                                    columnNumber: 427
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-[#171717]",
                                            children: "Jam operasional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections.tsx",
                                            lineNumber: 10,
                                            columnNumber: 523
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/sections.tsx",
                                            lineNumber: 10,
                                            columnNumber: 582
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].hours
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 10,
                                    columnNumber: 520
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 10,
                            columnNumber: 379
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].mapsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].mapsUrl,
                            children: "Buka Google Maps"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 10,
                            columnNumber: 630
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 10,
                    columnNumber: 175
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "grid min-h-[320px] place-items-center rounded-[32px] bg-[#e6d8c0] text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 42,
                                className: "mx-auto text-[#8f1d1d]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 10,
                                columnNumber: 799
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 font-serif text-3xl text-[#4e0e0e]",
                                children: "Singkawang"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 10,
                                columnNumber: 853
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-[#6b6b6b]",
                                children: "TODO: Tambahkan preview peta atau embed resmi."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 10,
                                columnNumber: 922
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 10,
                        columnNumber: 794
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 10,
                    columnNumber: 696
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 10,
            columnNumber: 97
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 10,
        columnNumber: 35
    }, this);
}
_c8 = Location;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "kontak",
        className: "bg-[#4e0e0e] px-5 py-24 text-white md:px-12 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold uppercase tracking-[.25em] text-[#d2a84a]",
                            children: "07 Ã¢â‚¬â€ Hubungi kami"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 11,
                            columnNumber: 195
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-5 text-5xl md:text-6xl",
                            children: [
                                "Mari mulai ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "text-[#d2a84a]",
                                    children: "percakapan."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 11,
                                    columnNumber: 351
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 11,
                            columnNumber: 298
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-7 max-w-md leading-7 text-white/60",
                            children: "Punya pertanyaan tentang produk, distribusi, atau peluang kerja sama? Sampaikan kepada kami."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 11,
                            columnNumber: 403
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex gap-4 text-white/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "aria-label": "Instagram",
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].instagram || '#',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 11,
                                        columnNumber: 656
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 11,
                                    columnNumber: 600
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "aria-label": "Facebook",
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].facebook || '#',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Facebook"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 11,
                                        columnNumber: 736
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 11,
                                    columnNumber: 682
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections.tsx",
                            lineNumber: 11,
                            columnNumber: 552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 11,
                    columnNumber: 187
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "space-y-4",
                        action: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].whatsapp}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                placeholder: "Nama",
                                className: "w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-[#d2a84a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 11,
                                columnNumber: 857
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nomor WhatsApp atau Email",
                                className: "w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-[#d2a84a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 11,
                                columnNumber: 1031
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Subjek",
                                className: "w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-[#d2a84a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 11,
                                columnNumber: 1229
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                required: true,
                                placeholder: "Pesan",
                                rows: 5,
                                className: "w-full resize-none rounded-2xl border border-white/15 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-[#d2a84a]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 11,
                                columnNumber: 1396
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-[#d2a84a] px-6 py-3 font-bold text-[#4e0e0e]",
                                children: [
                                    "Kirim pesan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1728
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 11,
                                columnNumber: 1595
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 11,
                        columnNumber: 784
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections.tsx",
                    lineNumber: 11,
                    columnNumber: 776
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections.tsx",
            lineNumber: 11,
            columnNumber: 120
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 11,
        columnNumber: 34
    }, this);
}
_c9 = Contact;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden bg-[#2b0707] px-5 py-10 text-white md:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -bottom-7 right-4 select-none font-serif text-[clamp(5rem,16vw,14rem)] font-bold leading-none text-white/[.04]",
                children: "ELANG DUA"
            }, void 0, false, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 12,
                columnNumber: 122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-[1280px] flex-col justify-between gap-6 md:flex-row md:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[52px] w-[170px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo/elang-dua-logo.png",
                                    alt: "Elang Dua",
                                    fill: true,
                                    sizes: "170px",
                                    className: "object-contain object-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections.tsx",
                                    lineNumber: 12,
                                    columnNumber: 454
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 12,
                                columnNumber: 409
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-white/45",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].shortDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections.tsx",
                                lineNumber: 12,
                                columnNumber: 580
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 12,
                        columnNumber: 404
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/45",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Elang Dua. Seluruh hak cipta dilindungi."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections.tsx",
                        lineNumber: 12,
                        columnNumber: 658
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections.tsx",
                lineNumber: 12,
                columnNumber: 294
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections.tsx",
        lineNumber: 12,
        columnNumber: 33
    }, this);
}
_c10 = Footer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "ProductScene");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Hero");
__turbopack_context__.k.register(_c3, "About");
__turbopack_context__.k.register(_c4, "Products");
__turbopack_context__.k.register(_c5, "Advantages");
__turbopack_context__.k.register(_c6, "History");
__turbopack_context__.k.register(_c7, "Distribution");
__turbopack_context__.k.register(_c8, "Location");
__turbopack_context__.k.register(_c9, "Contact");
__turbopack_context__.k.register(_c10, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1jgsndk._.js.map