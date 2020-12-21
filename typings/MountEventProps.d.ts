/**
 * This file was generated from MountEvent.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue } from "mendix";

export interface MountEventProps<Style> {
    name: string;
    style: Style[];
    onMount?: ActionValue;
}

export interface MountEventPreviewProps {
    class: string;
    style: string;
    onMount: {} | null;
}
