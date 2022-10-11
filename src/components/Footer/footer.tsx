import styles from './footer.module.scss';

function Footer() {
    return (
        <footer className={styles.stickyFooter}>
          <div className={styles.container}>
              <div className={[styles.copyright, 'text-center'].join(' ')}>
                  <span>Created by Kobi Krasnoff - original UI design by https://startbootstrap.com/</span>
              </div>
          </div>
        </footer>
    );
}

export default Footer;