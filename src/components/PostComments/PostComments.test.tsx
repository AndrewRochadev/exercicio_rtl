import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {

        render(<Post />);

        const btnComentario = screen.getByTestId('btn-comentario')

        fireEvent.change(screen.getByTestId('caixa-texto'), {
            target: {value: 'Primeiro Comentário'}
        })
        fireEvent.click(btnComentario)

        fireEvent.change(screen.getByTestId('caixa-texto'), {
            target: {value: 'Segundo Comentário'}
        })
        fireEvent.click(btnComentario)


        const comentarios = screen.getAllByTestId('linha-comentario')
        expect(comentarios).toHaveLength(2)
    })
});