package com.sarim.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarim.spring.dao.BookDAO;
import com.sarim.spring.model.Book;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	BookDAO bookDAO;

	@Override
	@Transactional
	public long save(Book book) {
		return bookDAO.save(book);
	}

	@Override
	@Transactional  
	public Book get(long id) {
		return bookDAO.get(id);
	}

	@Override
	@Transactional
	public List<Book> list() {
		return bookDAO.list();
	}

	@Override
	@Transactional
	public void update(long id, Book book) {
		bookDAO.update(id, book);
		
	}

	@Override
	@Transactional
	public void delete(long id) {
		bookDAO.delete(id);
		
	}

}
