import styles from './footer.module.scss';

function Footer() {
    return (
        <footer className={styles.stickyFooter}>
          <div className={styles.container}>
              <div className={[styles.copyright, 'text-center'].join(' ')}>
                  <span>Copyright © Kobi Krasnoff Website 2021</span>
              </div>
          </div>
        </footer>
    );
}

export default Footer;