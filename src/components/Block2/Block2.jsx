import styles from './Block2.module.css'
import Block3 from '../Block3/Block3'
import Block4 from '../Block4/Block4'

function Block2() {
	return <div className={styles['container']}>
              <Block3 />
			  <Block4 />
	</div>
}

export default Block2
