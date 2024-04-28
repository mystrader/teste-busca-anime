import styles from './averageScore.module.css';

export interface AverageScoreProps {
  numberScore?: string;
}

export function AverageScore({ numberScore = '21' }: AverageScoreProps) {
  let backgroundColorClass = '';

  // 💄 REGRA ESTILO: Abaixo de 50, vermelho, entre 50 e 80, amarelo, acima de 80, verde.

  if (numberScore !== '----') {
    const score = parseInt(numberScore);

    if (score < 50) {
      backgroundColorClass = styles.error; // Classe para fundo vermelho
    } else if (score >= 50 && score <= 80) {
      backgroundColorClass = styles.warning; // Classe para fundo amarelo
    } else {
      backgroundColorClass = styles.success; // Classe para fundo verde
    }
  }

  return (
    <div className={`${styles.averageScore} ${backgroundColorClass}`}>
      <span>{numberScore}%</span>
    </div>
  );
}

export default AverageScore;
