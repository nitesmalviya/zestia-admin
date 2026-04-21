import G from "../../utils/design-tokens";

export const GoldTopBar = () => (
    <div style={{
        height: 3, background: `linear-gradient(90deg,${G.goldL},${G.goldD})`,
        margin: '-22px -24px 18px', borderTopLeftRadius: 16, borderTopRightRadius: 16,
    }} />
);
