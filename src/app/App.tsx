import * as React from 'react';

export interface AppState {
}
export interface AppProps {
}

export class App extends React.Component<AppProps, AppState> {
    public render() {
        return (
            <div>
                Hello world!
            </div>
        )
    }
}
