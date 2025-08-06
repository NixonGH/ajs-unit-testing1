import getHealthStatus from '../healthIndicator';

test('should return healthy if health > 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
});

test('should return wounded if health between 15 and 50', () => {
    const result = getHealthStatus({ name: 'Лучник', health: 40 });
    expect(result).toBe('wounded');
});

test('should return critical if health < 15', () => {
    const result = getHealthStatus({ name: 'Воин', health: 10 });
    expect(result).toBe('critical');
});