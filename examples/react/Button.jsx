export default function Button({children, variant='primary', size='md', className='', type='button', ...props}) {
  const variants={primary:'sg-button-primary',secondary:'sg-button-secondary',outline:'sg-button-outline'};
  const sizes={sm:'sg-button-sm',md:'',lg:'sg-button-lg'};
  return <button type={type} className={['sg-button',variants[variant]??variants.primary,sizes[size]??'',className].filter(Boolean).join(' ')} {...props}>{children}</button>;
}
