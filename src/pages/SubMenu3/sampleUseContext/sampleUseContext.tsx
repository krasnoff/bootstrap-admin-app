import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light');

export default function SampleUseContext() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Form>
        <div>Example of the useContext hook</div>
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>
      </Form>
    </ThemeContext.Provider>
    
  );
}

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    title?: string
}

function Form({ children }: Props) {
    return (
      <>
        <Panel title="Welcome">
          <Button>Sign up</Button>
          <Button>Log in</Button>
        </Panel>
        {children}
      </>
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