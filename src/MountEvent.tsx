import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { MountEventProps } from "../typings/MountEventProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class MountEvent extends Component<MountEventProps<CustomStyle>> {
    constructor(props: MountEventProps<CustomStyle>){
        super(props)
    }

    //We have to have a render block, or else Mendix Native will crash. Render block is expected.
    render(): ReactNode {
        return (
        <View></View>
        )
    }

    componentDidMount() {
        this.props.onMount?.execute();
        return true;
    }
}

