# Setup de GitHub — pasos para Agus

El repo ya está iniciado y con el primer commit hecho localmente. Faltan 3 cosas que solo podés hacer vos (porque usan tu cuenta de GitHub): **crear el repo remoto, subirlo e invitar a Iñaki**. Son 5 minutos.

> Esto se corre en la **Terminal de tu Mac**, parado en la carpeta del proyecto:
> `cd ~/Documents/Claude/Projects/"Gula Content Studio"`

---

## Opción A — con GitHub CLI (la más rápida)

Si tenés `gh` instalado (`gh --version` lo confirma):

```bash
# 1. Loguearte (una sola vez)
gh auth login

# 2. Crear el repo PRIVADO y subir todo en un paso
gh repo create gula-content-studio --private --source=. --remote=origin --push

# 3. Invitar a Iñaki como colaborador (cambiá el usuario por el real)
gh repo add-collaborator gula-content-studio USUARIO_DE_INAKI --permission read
```

Listo. `--permission read` le da lectura (ve todo, no edita). Si querés que también pueda commitear, usá `write`.

---

## Opción B — sin CLI (desde la web)

1. Andá a https://github.com/new
2. Nombre: `gula-content-studio` · Visibilidad: **Private** · **NO** marques "Add a README" (ya tenemos uno).
3. Crear. GitHub te muestra la URL del repo (ej: `https://github.com/TU_USUARIO/gula-content-studio.git`).
4. En la Terminal, parado en la carpeta:

```bash
git remote add origin https://github.com/TU_USUARIO/gula-content-studio.git
git branch -M main
git push -u origin main
```

5. Invitá a Iñaki: en el repo → **Settings → Collaborators → Add people** → su usuario → rol **Read**.

---

## Cómo se mantiene actualizado (lo importante)

Cada vez que produzcamos algo nuevo en este chat, yo lo dejo **commiteado**. Para que Iñaki lo vea, hay que **pushear**:

```bash
git push
```

Tres formas de manejar el push, elegí la que te sirva:

- **Manual:** cuando quieras publicar, corrés `git push`. Control total.
- **Te aviso:** te digo "listo, hay cambios para pushear" y vos corrés el comando.
- **Automático (cron):** podemos dejar un push programado (ej. cada noche). Decime si lo querés y lo armo.

Del lado de Iñaki, él solo hace `git pull` (o conecta el repo a su proyecto de Claude) y ve la última versión.

---

## Nota de privacidad

El repo va **privado**: tiene briefs de marca, mandatorios/NoGos y la propuesta comercial de Tonipets (PDF). Solo lo ven los colaboradores que invites. No subir contraseñas ni tokens al repo.
