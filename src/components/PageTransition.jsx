import { useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "@mui/material";

const PageTransition = forwardRef((props, ref) => {
    const overlayRef = useRef(null);

    const theme = useTheme();

    useImperativeHandle(ref, () => ({
        play: (callback) => {
            const el = overlayRef.current;

            gsap.to(el, {
                y: "0%",
                duration: 0.6,
                ease: "power4.inOut",
                onComplete: () => {
                    callback?.(); // 👉 aqui faz reload
                }
            });

            gsap.to({}, { duration: 1 });
        }
    }));

    return (
        <div
            id="page-overlay"
            ref={overlayRef}
            style={{
                position: "fixed",
                inset: 0,
                background: theme.palette.background,
                transform: "translateY(0%)",
                zIndex: 9999
            }}
        />
    );
});

export default PageTransition;
