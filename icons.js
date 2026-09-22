// ============================================
// مسیرا — مجموعه آیکون‌های SVG
// ============================================

const PATHS = {
    // ===== نوار پایین =====
    home: "",       // ← d رو اینجا بذار
    tasks: "",      // ← d رو اینجا بذار
    chart: "",      // ← d رو اینجا بذار

    // ===== نوار بالا =====
    bell: "",
    moon: "",
    sun: "",

    // ===== محورها =====
    study: "",
    sport: "",
    family: "",
    mind: "",
    work: "",
    fun: "",

    // ===== اکشن‌ها =====
    plus: "",
    trash: "",
    close: "",
    back: "",

    // ===== وضعیت‌ها =====
    trophy: "",
    target: "",
    alert: "",
    sparkle: "",

    // ===== خالی =====
    empty: ""
};

// ============================================
// تنظیمات هر آیکون (viewBox، نوع، ضخامت)
// ============================================
const ICON_CONFIG = {
    // نوار پایین
    home:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    tasks:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    chart:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },

    // نوار بالا
    bell:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    moon:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    sun:     { viewBox: "0 0 24 24", type: "stroke", width: 2 },

    // محورها
    study:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    sport:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    family:  { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    mind:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    work:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    fun:     { viewBox: "0 0 24 24", type: "stroke", width: 2 },

    // اکشن‌ها
    plus:    { viewBox: "0 0 24 24", type: "stroke", width: 2.5 },
    trash:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    close:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    back:    { viewBox: "0 0 24 24", type: "stroke", width: 2 },

    // وضعیت‌ها
    trophy:  { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    target:  { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    alert:   { viewBox: "0 0 24 24", type: "stroke", width: 2 },
    sparkle: { viewBox: "0 0 24 24", type: "stroke", width: 2 },

    // خالی
    empty:   { viewBox: "0 0 24 24", type: "stroke", width: 1.5 }
};

// ============================================
// ساخت SVG از path
// ============================================
function buildSVG(name, size = 24) {
    const path = PATHS[name];
    const config = ICON_CONFIG[name] || { viewBox: "0 0 24 24", type: "stroke", width: 2 };

    if (!path) {
        console.warn(`⚠️ آیکون «${name}» خالیه`);
        return '';
    }

    const strokeAttrs = config.type === 'stroke' 
        ? `fill="none" stroke="currentColor" stroke-width="${config.width}" stroke-linecap="round" stroke-linejoin="round"`
        : `fill="currentColor"`;

    return `<svg viewBox="${config.viewBox}" width="${size}" height="${size}" ${strokeAttrs}><path d="${path}"/></svg>`;
}

// ============================================
// تابع کمکی برای HTML
// ============================================
function getIcon(name, size = 24) {
    return buildSVG(name, size);
}

// ============================================
// تزریق خودکار به عناصر با data-icon
// ============================================
function injectIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        const size = el.getAttribute('data-icon-size') || 24;
        el.innerHTML = getIcon(name, parseInt(size));
    });
}
