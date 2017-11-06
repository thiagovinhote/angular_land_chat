import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateExpression'
})
export class DateExpressionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const t = this.diff(value)
    if (t == 0) {
      return 'agora mesmo'
    }
    return t + ' atrás'
  }

  private sub(a, b): number {
      return a - b
  }

  private diff(value) {
    const current = new Date()
    const date = new Date(value)

    const dC = current.getDay()
    const mC = current.getMonth()
    const yC = current.getFullYear()
    const hC = current.getHours()
    const miC = current.getMinutes()
    const sC = current.getSeconds()

    const d = date.getDay()
    const m = date.getMonth()
    const y = date.getFullYear()
    const h = date.getHours()
    const mi = date.getMinutes()
    const s = date.getSeconds()

    var v = 0

    if (yC > y) {
      v = this.sub(yC, y)
      return v > 1 ? v + ' anos' : v + ' ano'
    }

    if (mC > m) {
      v = this.sub(mC, m)
      return v > 1 ? v + ' meses' : v + ' mês'
    }

    if (dC > d) {
      v = this.sub(dC, d)
      return v > 1 ? v + ' dias' : v + ' dia'
    }

    if (hC > h) {
      v = this.sub(hC, h)
      return v > 1 ? v + ' horas' : v + ' hora'
    }

    if (miC > mi) {
      v = this.sub(miC, mi)
      return v > 1 ? v + ' minutos' : v + ' minuto'
    }

    if (sC > s) {
      v = this.sub(sC, s)
      return v > 1 ? v + ' segundos' : v + ' segundo'
    }

    return 0
  }

}
