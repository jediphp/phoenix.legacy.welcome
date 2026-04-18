import svgPaths from "./svg-3m16cu767r";

function Group1() {
  return (
    <div className="absolute inset-[0_61.6%_51.4%_18.87%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.577 73.3895">
        <g id="Group">
          <path d={svgPaths.p23341b00} fill="url(#paint0_radial_2_23)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(53.7885 36.6947) scale(53.7885 36.6947)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_23" r="1">
            <stop stopColor="#F5EC9B" />
            <stop offset="1" stopColor="#905E26" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_61.6%_51.4%_18.87%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function SvgjsG() {
  return (
    <div className="absolute contents inset-[0_61.6%_51.4%_18.87%]" data-name="SvgjsG12522">
      <Group />
    </div>
  );
}

function SvgjsG2() {
  return (
    <div className="absolute inset-[86.75%_44.25%_5.95%_1.63%]" data-name="SvgjsG12524">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298.204 11.0127">
        <g id="SvgjsG12524">
          <path d={svgPaths.p36d27880} fill="var(--fill-0, #8F6D1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SvgjsG1() {
  return (
    <div className="absolute inset-[56.95%_46.26%_23.83%_3.45%]" data-name="SvgjsG12523">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277.118 29.0185">
        <g id="SvgjsG12523">
          <path d={svgPaths.p28486e80} fill="var(--fill-0, #8F6D1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function LogoVertical() {
  return (
    <div className="relative size-full" data-name="Logo Vertical">
      <SvgjsG />
      <SvgjsG2 />
      <SvgjsG1 />
    </div>
  );
}