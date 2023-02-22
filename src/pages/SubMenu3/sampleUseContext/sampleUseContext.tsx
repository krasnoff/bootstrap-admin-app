import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export default function SampleUseContext() {
    return (
        <div>Example of the useContext hook</div>
    );
}

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    title?: string
}

function Form({ children }: Props) {
    return (
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    );
}

function Panel({ title, children }: Props) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }

function Button({children}: Props ) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
}