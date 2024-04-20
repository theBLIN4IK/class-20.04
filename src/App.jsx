import Block from './components/Block/Block'
import Block2 from './components/Block2/Block2'
import Block5 from './components/Block5/Block5'
import List from './components/List/List'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles['container']}>
            <Block />
            <Block2>
            </Block2>
			<Block5 />
        </div>
    )
}

export default App
