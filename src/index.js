import m from 'mithril';
import './tailwind.config.css'

const MyComponent = {
    view: () => {
        return (
            <main className='bg-red-darker'>
                <h1>Hello World!</h1>
            </main>
        )
    }
};
m.render(document.body, <MyComponent/>);