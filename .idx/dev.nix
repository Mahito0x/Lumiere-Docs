{ pkgs, ... }: {
  channel = "unstable";

  packages = [
    pkgs.docker_29
    pkgs.nodejs_24
    pkgs.nodePackages.npm
    pkgs.tree
    pkgs.git
    pkgs.pnpm_9
  ];

  env = {};

  services.docker.enable = true;

  idx = {
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
      "esbenp.prettier-vscode"      # Auto-format your MDX and TSX
      "dbaeumer.vscode-eslint"      # Keep code clean
      "bradlc.vscode-tailwindcss"   # Tailwind CSS intellisense
      "unifiedjs.vscode-mdx"        # Crucial for MDX highlighting in Fumadocs
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          command = ["pnpm" "run" "dev"];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };

    workspace = {
      onCreate = {
        npm-install = "npm install";
        default.openFiles = [ ".idx/dev.nix" "README.md" "content/docs/index.mdx" ];
      };
      onStart = {
        dev-server = "npm run dev";
      };
    };
  };
}