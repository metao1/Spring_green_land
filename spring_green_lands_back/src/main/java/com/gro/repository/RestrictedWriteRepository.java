package com.gro.repository;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.RPiComponentType;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.security.access.prepost.PreAuthorize;

import java.io.Serializable;
import java.util.List;

@NoRepositoryBean
public interface RestrictedWriteRepository<T, ID extends Serializable> extends BaseRepository<T, ID> {

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    <S extends T> S save(S entity);

}
