import { useState } from 'react'
import styles from './NumberSelector.module.scss'

export const NumberSelector = ({
  value,
  onChange,
  label,
}: {
  value: number
  onChange: (value: number) => void
  label?: string
}) => {
  return (
    <div
      className={styles.container}
      onWheel={(ev) => onChange(value - Math.sign(ev.deltaY))}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.control}>
        {/* https://graphicdesign.stackexchange.com/a/74279 */}
        <button onClick={() => onChange(value - 1)}>&minus;</button>
        <div className={styles.value}>{value}</div>
        <button onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  )
}
