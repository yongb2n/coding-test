function solution(a, b, c, d) {
    const dice = [a, b, c, d]
    
    const frequency = {}
    for (const num of dice) {
        frequency[num] = (frequency[num] || 0) + 1
    }

    const keys = Object.keys(frequency).map(Number)
    const values = Object.values(frequency)

    if (values.includes(4)) {
        const p = keys[values.indexOf(4)]
        return 1111 * p
    }

    if (values.includes(3)) {
        const p = keys[values.indexOf(3)]
        const q = keys[values.indexOf(1)]
        return Math.pow((10 * p + q), 2)
    }

    if (values.filter(v => v === 2).length === 2) {
        const [p, q] = keys
        return (p + q) * Math.abs(p - q)
    }

    if (values.includes(2)) {
        const p = keys[values.indexOf(2)]
        const [q, r] = keys.filter(k => k !== p)
        return q * r
    }

    return Math.min(...keys)
}
