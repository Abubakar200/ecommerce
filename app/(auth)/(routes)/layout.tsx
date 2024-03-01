interface LayoutPageProps{
    children: React.ReactNode
}
const LayoutPage = ({
    children
}: LayoutPageProps) => {
    return ( 
        <div  className="flex flex-col h-full items-center justify-center">
            {children}
        </div>
     );
}
 
export default LayoutPage;