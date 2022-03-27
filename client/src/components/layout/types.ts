export type WrapperProps = {
    children: React.ReactNode
    className?: string
}

export type Size = "s" | "m" | "l" | "xl";

export type UnitProps = React.CSSProperties & WrapperProps;

export default WrapperProps;