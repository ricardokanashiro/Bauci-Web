# Situações:

-> Dei commit na branch errada e mandei pro github, como prosseguir?
   - Ir para a branch onde o commit foi errado, e pegar o hash do commit com git log
   - Ir para a branch onde deveria ser o commit
   - Dar cherry pick com o hash coletado (git cherry-pick <hash>)
   - Dar git add e commit, e push
   - Voltar a branch onde o commit está errado
   - Dar git reset --hard <hash>
   - Dar git push origin <branch-errada> --force na branch resetada
   - Ir para branch main

-> Fiz uma alteração na branch principal, que deve alterar as branchs que meus colegas estão trabalhando, como prosseguir?
   - Dar git stash na branch que o colega está trabalhando
   - Ir para a branch main
   - Dar git pull na main
   - Voltar para a branch que o colega está trabalhando
   - Dar merge da main nessa outra branch
   - Dar git stash pop
   - Desfazer caquinhas com git revert

# Notes

-> Ao dar git checkout na main, não irá perder as alterações que está fazendo em outra branch (as que não tem commit em add). Porém, se elas conflitarem com as da branch main, terá que executar o git stash para salvar as alterações conflitantes antes de ir.

-> git commit --amend (mudar último commit)

# => Continuar modal de editar categoria