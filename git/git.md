## git原理以及实用指南

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="166" height="28">
    <g shape-rendering="crispEdges">
        <path fill="#555" d="M0 0h91v28H0z"/>
        <path fill="#97ca00" d="M91 0h75v28H91z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="100">
        <image x="9" y="7" width="14" height="14" xlink:href="data:image/vnd.microsoft.icon;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAChP+1MmS/DRJkvx0ShP/FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="/>
        <text x="540" y="175" transform="scale(.1)" textLength="200">
            GIT
        </text>
        <text x="1285" y="175" font-weight="bold" transform="scale(.1)" textLength="650">
            Tenggouwa
        </text>
    </g>
</svg>