import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const Marker = ({ map, position, draggable = false, onDragEnd, children }) => {
    const markerRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div");
            rootRef.current = createRoot(container);
            markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                position,
                content: container,
                draggable,
            });
        }

        return () => {
            // Cleanup: Remove the marker when the component is unmounted
            if (markerRef.current) {
                markerRef.current.setMap(null);
            }
        };
    }, []);

    useEffect(() => {
        if (markerRef.current && map) {
            markerRef.current.map = map;
            if (rootRef.current) {
                rootRef.current.render(children);
            }
        }
    }, [map, children]);

    useEffect(() => {
        if (markerRef.current && draggable && onDragEnd) {
            markerRef.current.addListener("dragend", (event) => {
                onDragEnd(event);
            });
        }
    }, [draggable, onDragEnd]);

    return null;
};

export default Marker;
