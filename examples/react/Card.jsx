export default function Card({children,className='',...props}) {return <div className={['sg-card',className].filter(Boolean).join(' ')} {...props}>{children}</div>}
