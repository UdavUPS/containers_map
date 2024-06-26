import ErrorRepository from '../app';

test('ErrorRepository test', () => {
    const errorRepository = new ErrorRepository();

    errorRepository.addError(404, 'Not found');
    errorRepository.addError(400, 'Bad request');
    errorRepository.addError(403, 'Forbidden');
    
    const result1 = errorRepository.translate(404);
    const result2 = errorRepository.translate(403);
    const result3 = errorRepository.translate(400);
    
    expect(result1).toBe('Not found');
    expect(result2).toBe('Forbidden');
    expect(result3).toBe('Bad request');
});