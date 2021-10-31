type Props = {
  selected?: boolean
}

function WholeGlassIcon({ selected }: Props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 62 62">
      <g transform="translate(-1134 -978)">
        <g
          transform="translate(1134 978)"
          stroke={selected ? '#f5e7d4' : '#f0f0f0'}
          fill={selected ? '#fff1e2' : '#fff'}
          strokeWidth={1.3}
        >
          <rect width={62} height={62} rx={16} stroke="none" />
          <rect x={0.65} y={0.65} width={60.7} height={60.7} rx={15.35} fill="none" />
        </g>
        <g transform="translate(642.421 873.033)">
          <path
            d="M508.719 153.063c13.332-.128 25.876-1.257 29.519-1.612a1.179 1.179 0 001.071-1.168c.058-10.134-1.879-25.641-2.422-29.779a1.184 1.184 0 00-1.192-1.03c-5.939.064-22.957.007-27.461-.01a1.183 1.183 0 00-1.19 1.1 181.8 181.8 0 00-.118 23.864l.592 7.532a1.2 1.2 0 001.201 1.103z"
            fill="#c69c79"
          />
          <path
            d="M508.719 153.063c13.332-.128 25.876-1.257 29.519-1.612a1.179 1.179 0 001.071-1.168c.058-10.134-1.879-25.641-2.422-29.779a1.184 1.184 0 00-1.192-1.03c-5.939.064-22.957.007-27.461-.01a1.183 1.183 0 00-1.19 1.1 181.8 181.8 0 00-.118 23.864l.592 7.532a1.2 1.2 0 001.201 1.103z"
            stroke="#b58c6d"
            strokeMiterlimit={10}
            fill="none"
          />
          <path
            d="M534.6 147.63a.894.894 0 01-.848.893c-3.874.223-18.912 1.195-22.663 1.429a.9.9 0 01-.96-.793c-.234-1.831-.4-3.852-.525-5.95-.435-7.882-.179-16.712-.078-19.414a.9.9 0 01.86-.882c5.08-.3 10.025-.48 14.078-.6 4.12-.112 7.3-.167 8.686-.19a.9.9 0 01.9.759c.809 4.954.619 20.885.55 24.748z"
            transform="translate(.324 .309)"
            fill="azure"
          />
          <path
            d="M534.576 147.63a.894.894 0 01-.848.893c-3.874.223-18.912 1.195-22.663 1.429a.9.9 0 01-.96-.793c-.234-1.831-.4-3.852-.525-5.95l14.859-20.9c4.12-.112 7.3-.167 8.686-.19a.9.9 0 01.9.759c.808 4.958.618 20.889.551 24.752z"
            transform="translate(.349 .309)"
            fill="#e1f8f8"
          />
          <path
            fill="#fffff4"
            d="M528.366 134.036s-.851.161-1.023-2.125c0 0-.513-3.95.089-6.126 0 0 .343-.995 1.211-1.011 0 0 1.652-.352.914 7.77.001 0-.057 1.389-1.191 1.492z"
            transform="translate(2.393 .618)"
          />
          <path
            fill="#fffff4"
            d="M527.58 136.985a1.4 1.4 0 01.689-1.768 1.2 1.2 0 011.5.884 1.23 1.23 0 01-.8 1.513 1.286 1.286 0 01-1.389-.629z"
            transform="translate(2.434 1.83)"
          />
        </g>
      </g>
    </svg>
  )
}

export default WholeGlassIcon