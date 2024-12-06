export const base = {
    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        h1: "1.75rem",
        h2: "1.375rem",
        h3: "1.25rem",
        h4: "1.125rem",
        t1: "1rem",
        t2: "0.93rem",
        t3: "0.81rem",
        b1: "1.125rem",
        b2: "0.94rem",
    },
    color: {
        primary1: "#FEAA09",
        primary2: "#343C6A",
        primary3: "#274dc4",
        secondary: "#FE5C73",
        tertiary: "#16DBCC",
        background: "#F5F7FA",
        links: "#B1B1B1",
        activeLink: "#1814F3",
        text: "#232323",
        body:"#718EBF"
    },
    gradient: {
        blue: "linear-gradient(107deg, #4C49ED 2.61 %, #0A06F4 101.2 %)"
    },
    hover: {},
    radius: {
        r0: "0.94rem",
        r1: "1.25rem",
        r2: "1.56rem",
        r3: "3.13rem"
    },
    spacing: {},
    breakpoints: {
        xs: '575.98px', // landscape phones, 576px and up
        sm: '767.98px', // tablets, 768px and up
        md: '991.98px', // desktops, 992px and up
        lg: '1199.98px', // large desktops, 1200px and up
        xl: '1399.98px' // larger desktops, 1400px and up
    },

}


export const device = {
    xs: `(max-width: ${base.breakpoints.xs})`,
    sm: `(max-width: ${base.breakpoints.sm})`,
    md: `(max-width: ${base.breakpoints.md})`,
    lg: `(max-width: ${base.breakpoints.lg})`,
    xl: `(max-width: ${base.breakpoints.xl})`
}