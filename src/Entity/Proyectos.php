<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProyectosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProyectosRepository::class)]
#[ApiResource]
class Proyectos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Nombre = null;

    #[ORM\Column(length: 255)]
    private ?string $tecnologias_utilizadas = null;

    #[ORM\Column(length: 500)]
    private ?string $link = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->Nombre;
    }

    public function setNombre(?string $Nombre): static
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    public function getTecnologiasUtilizadas(): ?string
    {
        return $this->tecnologias_utilizadas;
    }

    public function setTecnologiasUtilizadas(string $tecnologias_utilizadas): static
    {
        $this->tecnologias_utilizadas = $tecnologias_utilizadas;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): static
    {
        $this->link = $link;

        return $this;
    }
}
