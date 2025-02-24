export const Card = ({ className, children, ...props }) => {
    return (
      <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
        {children}
      </div>
    )
  }
  Card.displayName = "Card"
  
  export const CardHeader = ({ className, children, ...props }) => {
    return (
      <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  CardHeader.displayName = "CardHeader"
  
  export const CardTitle = ({ className, children, ...props }) => {
    return (
      <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
        {children}
      </h3>
    )
  }
  CardTitle.displayName = "CardTitle"
  
  export const CardContent = ({ className, children, ...props }) => {
    return (
      <div className={`p-6 pt-0 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  CardContent.displayName = "CardContent"
  
  